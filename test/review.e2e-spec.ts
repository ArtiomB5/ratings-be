import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { CreateReviewDto } from 'src/review/dto/create-review.dto';
import { Types, disconnect } from 'mongoose';

const productId = new Types.ObjectId().toHexString();

const getTestDto = (productId: string): CreateReviewDto => {
  const rating = Math.ceil(Math.random() * 5);
  const textContent = new Date().toString();
  return {
    name: textContent,
    title: textContent,
    description: textContent,
    rating,
    productId,
  };
};

describe('Reviews (e2e)', () => {
  let app: INestApplication;
  let createdId: string[];

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/review/create (POST)', async () => {
    const resp1 = await request(app.getHttpServer())
      .post('/review/create')
      .send(getTestDto(productId))
      .expect(201);
    const resp2 = await request(app.getHttpServer())
      .post('/review/create')
      .send(getTestDto(productId))
      .expect(201);

    createdId = [resp1.body.newReview._id, resp2.body.newReview._id];

    expect(createdId).toBeDefined();
    expect(createdId.length).toBe(2);
  });

  it('/review/byProduct/:productId (GET)', async () => {
    const { body } = await request(app.getHttpServer())
      .get('/review/byProduct/' + productId)
      .expect(200);
    const reviewsArrayLength = body.existingReviews.length;
    expect(reviewsArrayLength).toBeGreaterThan(0);
  });

  it('/review/:id (DELETE)', async () => {
    const { body } = await request(app.getHttpServer())
      .delete('/review/' + createdId[0])
      .expect(200);
    const deletedReviewId = body.deletedReview._id;
    expect(deletedReviewId).toBe(createdId[0]);
  });

  afterAll(() => {
    disconnect();
  });
});
