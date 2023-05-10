import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/entities/user.entity";

export class Question {
    @ApiProperty({ description: "Question text", nullable: false })
    question: string;

    @ApiProperty({ description: "Answer text", nullable: false })
    answer: string;

    @ApiProperty({ description: "Useful links array", nullable: false })
    links: string[];

    @ApiProperty({ description: "Tangs array", nullable: false })
    tags: string[]

    @ApiProperty({ description: "Date", nullable: false })
    createdDate: Date

    // @ApiProperty({ description: "Creator User", nullable: false })
    // createdBy: User
}
