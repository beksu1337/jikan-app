import { AnimeListEntity } from "@/shared/types";
import { LargeCard } from "./large-card";
import { SmallCard } from "./small-card";

type Props = AnimeListEntity & {
	isLoading: boolean;
	cardType: "large-card" | "small-card";
	index: number;
};

export const Card = ({ cardType, ...rest }: Props) => {
	switch (cardType) {
		case "large-card":
			return <LargeCard {...rest} />;
		case "small-card":
			return <SmallCard shouldCount {...rest} />;
		default:
			return null;
	}
};
