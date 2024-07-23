import '../../css/header.css';
import profilImg from "../../images/utilisateur.png";
import groupImg from "../../images/groupe.png";
import listMenuImg from "../../images/liste-des-menus.png";
import messageImg from "../../images/messager.png";
import statutImg from "../../images/statut.png";

function Header(){
    return (
        <>
            <div className='header'>
                <div className='profil'>
                    <img src={profilImg} alt="" />
                </div>

                <div className='icon-div'>
                    <span className='icon-btn'>
                        <img src={groupImg} alt="" />
                    </span>
                    <span className='icon-btn'>
                        <img src={statutImg} alt="" />
                    </span>
                    <span className='icon-btn'>
                        <img src={messageImg} alt="" />
                    </span>
                    <span className='icon-btn'>
                        <img src={listMenuImg} alt="" />
                    </span>
                </div>
            </div>
        </>
    )

}

export default Header   