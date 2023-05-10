import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/users/user.schema";

export type QuestionDocument = Question & Document;
@Schema()
export class Question {
    @Prop({required:true})
    question: string;
    @Prop({required:true})
    answer: string;
    @Prop({required:true, default: []})
    links: string[];
    @Prop({required:true, default: []})
    tags: string[]
    @Prop({default: Date.now() })
    createdDate: Date
    // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
    // createdBy: User
}
export const QuestionSchema = SchemaFactory.createForClass(Question)