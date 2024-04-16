// Destructuring

const course = {
  courseName: "NextJS Mastery",
  coursePrice: "999",
  courseInstructor: "satyajeet",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;
console.log(instructor); // satyajeet

const { coursePrice: price, courseName: name } = course;
console.log(price, name);

