import { TrainingProgram } from "./trainingProgram";

export class ParentingTrainingProgram implements TrainingProgram {
	public name: string;
	public instructor: string;
	public topics: string[];

	constructor(name: string, instructor: string, topics: string[]) {
		this.name = name;
		this.instructor = instructor;
		this.topics = topics;
	}

	public getName(): string {
		return this.name;
	}

	public setName(name: string): void {
		this.name = name;
	}

	public getInstructor(): string {
		return this.instructor;
	}

	public setInstructor(instructor: string): void {
		this.instructor = instructor;
	}

	public getTopics(): string[] {
		return this.topics;
	}

	public setTopics(topics: string[]): void {
		this.topics = topics;
	}

	public startTraining(): void {
		console.log(`The ${this.name} parenting training program has started.`);
	}

	public endTraining(): void {
		console.log(`The ${this.name} parenting training program has ended.`);
	}

	public getTrainingDetails(): string {
		let trainingDetailsString = `
		Training Program Name: ${this.name}
		Instructor Name: ${this.instructor}
		Topics Covered: `;
		this.topics.forEach((topic) => (trainingDetailsString += `\n   ${topic}`));
		return trainingDetailsString;
	}
}

let topics = ['Parent-Child Communication', 'Emotional Intelligence', 'Conflict Resolution'];
let parentingTrainingProgram = new ParentingTrainingProgram('Parenting for Beginners', 'John Doe', topics);

console.log(parentingTrainingProgram.getTrainingDetails());
parentingTrainingProgram.startTraining();
parentingTrainingProgram.endTraining();