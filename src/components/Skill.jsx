const skillSet = [
  {set: "Playing", id: 1},
  {set: "Sleeping", id: 2}
]

const Skills = () => {
 
    const listSkills = skillSet.map(skill => (
      <li key={skill.id}>
        {skill.set}
      </li>
      

    ));
    return (
      <ul>{listSkills}</ul>
  )

}
export default Skills

