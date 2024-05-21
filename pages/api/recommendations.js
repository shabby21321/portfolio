// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const recommendationCard = [
  {
  id: 0,
  name: 'Ali Ahmed',
  image: "images/muhammad.jpeg",
  designation: 'Full Stack Developer',
  view: "Shabbir Ali is a highly skilled full stack developer with expertise in React.js, Next.js, Node.js, and GraphQL. His technical leadership skills and ability to deliver high-quality projects make him an excellent choice for any full stack development or CTO role.",
  linkednURL: "https://www.linkedin.com/in/aliahmed/"
  },
  {
  id: 1,
  name: 'Faisal Khan',
  image: "images/nasir.jpg",
  designation: 'Data Scientist | Machine Learning Engineer',
  view: "Shabbir Ali is a talented developer with a strong understanding of full stack development and technical leadership. His professionalism and attention to detail make him an asset to any team. I highly recommend him for any full stack development or technical leadership role.",
  linkednURL: "https://www.linkedin.com/in/faisalkhan/"
  },
  {
  id: 2,
  name: 'Sarfraz Ahmed',
  image: "images/sikandar.jpeg",
  designation: 'Full Stack Developer',
  view: "Shabbir Ali is a skilled full stack developer with expertise in React.js, Node.js, and technical leadership. His problem-solving skills and dedication to delivering exceptional results make him an excellent choice for any full stack development or technical leadership role.",
  linkednURL: "https://www.linkedin.com/in/sarfarazahmed/"
  },
  {
  id: 3,
  name: 'Mudasir Ali',
  image: "images/shahmir.jfif",
  designation: 'MERN Stack Developer at Productbox',
  view: "I highly recommend Shabbir Ali for full stack development positions. His expertise in ReactJS, Next.js, Node.js, and technical leadership make him an invaluable asset to any team.",
  linkednURL: "https://www.linkedin.com/in/sarfarazahmed/"
  },
  ]
  
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
