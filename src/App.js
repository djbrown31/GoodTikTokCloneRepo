import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">

      <div className="app__videos">
        <Video url="https://v77.tiktokcdn.com/4f7ad59894d8b5d7855cda91f319a658/5f5d59cc/video/tos/useast2a/tos-useast2a-pve-0068/74b92f268af54eb3be3060fc41cd1932/?a=1233&br=3600&bt=1800&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009121729060101902091024A16609F&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M25vbHlscmpndzMzNDczM0ApO2k2OWY0NTtoNzNlNjw1M2dla2YxLy0vLWJfLS1jMTZzczIzLy0tYGA0L2M2MTRgLTQ6Yw%3D%3D&vl=&vr="
        channel="savagemomlife"
        description="bodacious dancing"
        song="99 problems but react aint one"
        likes={123}
        messages={456}
        shares={789}
        />
        <Video url="https://v77.tiktokcdn.com/4f7ad59894d8b5d7855cda91f319a658/5f5d59cc/video/tos/useast2a/tos-useast2a-pve-0068/74b92f268af54eb3be3060fc41cd1932/?a=1233&br=3600&bt=1800&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009121729060101902091024A16609F&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M25vbHlscmpndzMzNDczM0ApO2k2OWY0NTtoNzNlNjw1M2dla2YxLy0vLWJfLS1jMTZzczIzLy0tYGA0L2M2MTRgLTQ6Yw%3D%3D&vl=&vr="
        channel="savagemomlife"
        description="bodacious dancing"
        song="99 problems but react aint one"
        likes={123}
        messages={456}
        shares={789}/>
      </div>

      {/* app container */}
        {/* videos */}
        {/* <Video /> */}
        {/* <Video /> */}
        {/* <Video /> */}
        {/* <Video /> */}

    </div>
  );
}

export default App;
