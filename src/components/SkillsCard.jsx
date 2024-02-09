import "../styles/skillscard.css"

const SkillsCard = ({title, skill1, skill2, skill3, skill4, skill5, skill6, skill7, skill8, skill9}) => {
  return (
    <div className="skills-card">
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>{title}</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>{skill1}</td>
                    <td>{skill2}</td>
                    <td>{skill3}</td>
                </tr>
                <tr>
                    <td>{skill4}</td>
                    <td>{skill5}</td>
                    <td>{skill6}</td>
                </tr>
                <tr>
                    <td>{skill7}</td>
                    <td>{skill8}</td>
                    <td>{skill9}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default SkillsCard