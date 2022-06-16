import { forwardRef, useImperativeHandle, useRef } from "react";
// @ts-ignore
import video1 from "../../assets/videos/videos1.mp4";

function Video( props:any ,ref: any) {
    const videoRef: any = useRef();
    console.log(props, '   ',videoRef,'   ', ref);
    
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        }
    }));

    return <video
        ref={videoRef}
        src={video1}
        width={280}
    />;
}

export default forwardRef(Video);
