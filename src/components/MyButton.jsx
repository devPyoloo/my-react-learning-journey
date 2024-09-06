
const MyButton = () => {

 const imgUrl = '../src/assets/profile.jpg';

  const handleClicks = (e) => {
    e.target.style.display = "none";
  } 

  return (
<img onClick={(e) => handleClicks(e)} src={imgUrl}></img>
  )

}
export default MyButton