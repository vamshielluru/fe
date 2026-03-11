import React from 'react'
import styles from './Header.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { fontSize } from '@mui/system';
import PowerSettingNewIcon from "@mui/icons-material/PowerSettingsNew";

function Header() {
  return (
   <div>
   <div className={styles.navBar}>
      <div className={styles.logoContainer}>
        <img src="./logo.png.png" alt="" className={styles.logo}/>
        <h3>KisanMart</h3>
    </div>
    <div className={styles.nameContainer}>
          <div className={styles.circle}>V</div>
          <p>
           Vamshi
          </p>
           <KeyboardArrowDownIcon/>
    </div>
   </div>
     <div className={styles.dropDownContainer}>
    <div style={{padding:"20px"}}>
        <div>vamshi@gmail.com</div>
        <div>Admin</div>
     </div>
     <div className={styles.line}></div>
     <div className={styles.logoutContainer} style={{padding:"20px"}}>   
        <PowerSettingNewIcon
        sx={{
            fontSize: "1.5rem"
        }} 
        />
       <button className={styles.logoutBtn}></button>
     </div>
   </div>
  </div> 
  )
}

export default Header