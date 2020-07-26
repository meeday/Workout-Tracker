const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Please enter an exercise type",
        },
        name: {
          type: String,
          trim: true,
          required: "What is the name of the exercise?",
        },
        duration: {
          type: Number,
          required: "Enter duration in minutes",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => { return total + exercise.duration }, 0);
});

const workout = mongoose.model("Workout", workoutSchema);

module.exports = {
  Workout: workout,
};
