import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question, QuestionDocument } from './question.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class QuestionsService {
  constructor(@InjectModel(Question.name) private readonly questionModel: Model < QuestionDocument > ) {}
  
  async create(createQuestionDto: CreateQuestionDto): Promise < QuestionDocument > {
    const question = new this.questionModel(createQuestionDto);
    return question.save();
  }

  findAll(): Promise < QuestionDocument[] > {
    return this.questionModel.find()
      .exec();
  }

  findOne(tag: string) {
    return this.questionModel.find({tags: tag});
  }

  update(id: string, updateQuestionDto: UpdateQuestionDto): Promise < QuestionDocument > {
    return this.questionModel.findByIdAndUpdate(id, updateQuestionDto);
  }

  remove(id: string) {
    return this.questionModel.findByIdAndDelete(id);
  }
}
