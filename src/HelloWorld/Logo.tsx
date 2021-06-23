import {Img, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import me from "./me.jpeg";

export const Logo: React.FC<{
	transitionStart: number;
}> = () => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();


	return (
		<div style={{position:"absolute", left:0,right:0,top:0,bottom:0,transform: `scale(${spring({
			fps: videoConfig.fps,
			frame: frame,
			config: {
				damping: 100,
				stiffness: 200,
				mass: 0.5,
			},
		})})`,
	display:"flex",alignItems:"center",justifyContent:"center"}}
		>
			<div>
				<Img src={me} height={400} width={400} style={{borderWidth:0,borderRadius:"50%"}}/>
			</div>
		</div>
	);
};
