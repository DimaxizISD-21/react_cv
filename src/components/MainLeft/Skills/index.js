import { FormattedMessage } from "react-intl";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section-title">{<FormattedMessage id="skills.section-title"/>}</h2>

            <div className="skills-content">
                <ul className="skills-data">
                    <li className="skills-name">
                        <span className="skills-circle"></span>Html 5
                    </li>
                    <li className="skills-name">
                        <span className="skills-circle"></span>Css 3
                    </li>
                    <li className="skills-name">
                        <span className="skills-circle"></span>Sass
                    </li>
                    <li className="skills-name">
                        <span className="skills-circle"></span>JavaScript
                    </li>
                    <li className="skills-name">
                        <span className="skills-circle"></span>TypeScript
                    </li>
                </ul>

                <ul className="skills-data">
                    <li className="skills-name">
                        <span className="skills-circle"></span>React
                    </li>
                    <li className="skills-name">
                        <span className="skills-circle"></span>React Hooks
                    </li>
                    <li className="skills-name">
                        <span className="skills-circle"></span>Redux
                    </li>
                    <li className="skills-name">
                        <span className="skills-circle"></span>Redux Toolkit
                    </li>
                    <li className="skills-name">
                        <span className="skills-circle"></span>Styled components 
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Skills;