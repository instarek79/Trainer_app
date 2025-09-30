import React from "react";

export interface ContentComponentProps {
  title?: string;
  description?: string;
  list?: React.ReactNode;
  
}

const ContentComponent: React.FC<ContentComponentProps> = ({ title, description, list }) => {
  return (
    <div  className="p-4 font-sans  text-xl " style={{ maxWidth: "55vw", margin: "0 auto" }}>
      <div style={{display: "flex", flexDirection: "row", gap: "10px", justifyContent: "center", alignItems: "center"}}>

      <h2 className="font-bold " style={{alignSelf: "center" }}>{title}</h2>
      </div>
      <div style={{ marginTop: "10px", marginBottom: "20px",  marginLeft: "20px"}}>

      <p style={{textAlign: "justify"}}>{description}</p>
      {list}
      </div>
    </div>
  );
};

export default ContentComponent;
