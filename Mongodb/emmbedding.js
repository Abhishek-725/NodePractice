const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
    authors : [authorSchema]
}));

async function createCourse(name, authors) {
    const course = new Course({
        name, 
        authors
    }); 
    const result = await course.save();
    console.log(result);
}
// To get all courses
async function listCourses() { 
    const courses = await Course.find();
    console.log(courses);
}
// update author
async function updateAuthor(courseId) {
    const course = await Course.updateOne({_id : courseId},{
        $set : {"name" : "Node Course1","author.name" : "John Smith"}
    });
    // course.author.name = "Abhi";
    // course.save();
}
// updateAuthor('64510435311b9f0b1bfe62d4');
async function addAuthor(courseId,author){
    const course = await Course.findById(courseId);
    course.authors.push(author);
    course.save();

}
// addAuthor('64524033a4dfa53d84fc0b4e',new Author({ name: 'Amy' }));

async function removeAuthor(courseId,authorId){
    const course = await Course.findById(courseId);
    const author = course.authors.id(authorId);
    console.log(author);
    author.remove({});
    course.save();

}
removeAuthor('64524033a4dfa53d84fc0b4e','645244950ca45c50ec49751b');
// createCourse('Node Course1', [
//     new Author({ name: 'Mosh1' }),
//     new Author({ name: 'Mosh2' }),
//     new Author({ name: 'Abhi' }),
// ]);
