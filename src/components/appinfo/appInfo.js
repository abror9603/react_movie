import "./appInfo.css";

const AppInfo = ({data, like}) => {
   
    return(
       <div className="appInfo">
        <p className="fs-3 text-uppercase">
            barcha kinolar soni:{data}
        </p>
        <p className="fs-4 text-uppercase">
            sevimli kinolar soni:{like}
        </p>
       </div>
    )
}

export default AppInfo;