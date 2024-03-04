import Reacts from './Components/React';
import style from './Styles/style.module.css';
function App() {

const Titles = {
    headerTitle: 'React Essentials',
    subTitle: 'Fundamental React concepts you will need for almost any app yyou are going to build!',
    childTitle:"Core Concepts"
}

const {headerTitle,subTitle,childTitle} = Titles;

  return (
    <>

<div className={style.Parent}>

<Reacts Header = {headerTitle} Sub={subTitle} Child={childTitle} />

</div>


     
    </>
  )
}

export default App
