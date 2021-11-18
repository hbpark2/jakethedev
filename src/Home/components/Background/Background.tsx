import { useContext, useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper";
import "swiper/swiper-bundle.css";
import { Container, ImageBox, ImageWrap, Inner, LoopContainer, LoopWrap } from "./styles";
import Noise from "../../../Components/Common/Noise";
import { CurrentContext } from "../../../Context/ContextStore";

SwiperCore.use([Navigation, Pagination, EffectFade]);

const Background: React.FC = () => {
	const { invert, bgImage } = useContext(CurrentContext);

	const imgArr = [
		{ src: "", alt: "" },
		{ src: "", alt: "" },
		{ src: "", alt: "" },
		{ src: "", alt: "" },
	];

	return (
		<Container>
			<Inner>
				<LoopContainer>
					<LoopWrap>
						<ImageWrap>
							{imgArr.map((item, index) => {
								return <ImageBox key={`img${index}`} invert={invert} bgImage={bgImage} />;
							})}
						</ImageWrap>
						<ImageWrap>
							{imgArr.map((item, index) => {
								return <ImageBox key={`img${index}`} invert={invert} bgImage={bgImage} />;
							})}
						</ImageWrap>
					</LoopWrap>
				</LoopContainer>
			</Inner>
			<Noise />
		</Container>
	);
};

export default Background;
