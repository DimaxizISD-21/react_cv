import { FormattedMessage } from "react-intl";

const Profile = () => {
    return (
        <section className="profile section" id="profile">
            <h2 className="section-title">{<FormattedMessage id="profile.section-title"/>}</h2>
            <p className="profile-description"> 
                {<FormattedMessage id="profile.description"/>}
            </p>
        </section>
    );
};

export default Profile;