class Workout {
    name: string;
    id: string;

    exercises: Exercise[] = [];

    constructor(name: string, id: string) {
        this.name = name;
        this.id = id;
    }

    addExercise(excercise: Exercise) {
        this.exercises.push(excercise)
    }

    removeExercise(exercise: Exercise) {
        const index = this.exercises.indexOf(exercise);
        if (index !== -1) {
            this.exercises.splice(index, 1)
        } 
    }
}

export default Workout;