import logo from './logo.svg';
import './App.css';
import StudentList from './components/StudentList/StudentList';

function App() {

const students = [
  {
    name: 'Cait Yomorta',
    bio: ' is a 46 year old who loves rock hunting and collecting seaglass. She believes rocks have metaphysical powers and tries to lure men with the rose quartz that she carries in her pockets.',
    scores: [
      {
        date: '2018-02-08',
        score: 77
      },
      {
        date: '2018-04-22',
        score: 92
      },
      {
        date: '2018-09-15',
        score: 68
      }
    ]
  },
  {
    name: 'Holly Baird',
    bio: ` is a 32 year old philosophy student. She likes to ask big life questions such as, "What is the meaning of life?" and "How many radio waves do I absorb on a daily basis and what is the long-term affect of that?" She's not the brightest philosophy student, but that's okay.`,
    scores: [
      {
        date: '2018-12-14',
        score: 88
      },
      {
        date: '2019-01-09',
        score: 79
      },
      {
        date: '2019-02-23',
        score: 91
      },
      {
        date: '2019-03-01',
        score: 95
      }
    ]
  },
  {
    name: 'Wes Mungia',
    bio: ' is an 18-year old Zillenial who has nothing to live for except overthrowing the tyrannical, oligarchy of a government established by Boomers and GenX.',
    scores: [
      {
        date: '2018-10-11',
        score: 62
      },
      {
        date: '2018-11-24',
        score: 74
      },
      {
        date: '2018-12-19',
        score: 85
      }
    ]
  }
]
  return (
    <>
      <h1>React Students Lab</h1>
      <StudentList students={students}/>
    </>
  );
}

export default App;
