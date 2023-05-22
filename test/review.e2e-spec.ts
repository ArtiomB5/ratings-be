import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { CreateReviewDto } from 'src/review/dto/create-review.dto';
import { Types, disconnect } from 'mongoose';

const productId = new Types.ObjectId().toHexString();

// Create a test dto object
const testDto: CreateReviewDto = {
  name: 'test',
  title: 'test title',
  description: 'test description',
  rating: 5,
  productId,
};

// Describe the AppController (e2e)
describe('AppController (e2e)', () => {
  // Create a Nest application using the module fixture
  let app: INestApplication;
  let createdId: string;

  // Create a test module that contains the AppModule
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    // Create a Nest application using the module fixture
    app = moduleFixture.createNestApplication();
    // Initialize the application
    await app.init();
  }, 5000);

  // Test the root path
  it('/review/create (POST)', async (done) => {
    // Make a GET request to the root path
    return (
      request(app.getHttpServer())
        .get('/review/create')
        .send(testDto)
        // Expect a 200 response code
        .expect(201)
        .then(({ body }: request.Response) => {
          createdId = body.id;
          expect(createdId).toBeDefined();
          done();
        })
    );
  });

  afterAll(() => {
    disconnect();
  });
});
