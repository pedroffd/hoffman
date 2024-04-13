import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export interface ICard {
  avatarFallback?: string;
  avatarSize?: number;
  imageSrc?: string;
  cardTitle: string;
  cardDescription: string;
}

interface ICardProps {
  cardProps: ICard;
  index: number;
}

const CardProductInfo: React.FC<ICardProps> = ({ cardProps, index }) => {
  return (
    <div className="flex sm:flex-row items-center justify-center text-center my-8 mx-4 lg:mx-3 xl:mx-5">
      <Card className="w-64 max-w-80 h-80 bg-card-foreground">
        <div className="w-[70px] h-[70px] -mt-8 rounded-full bg-card-foreground flex items-center align-middle text-center justify-center mx-auto">
          <div className="w-[60px] h-[60px] rounded-full border-[0.5px] border-solid border-card-border mx-auto flex items-center justify-center text-center">
            <p className="font-semibold">{index + 1}</p>
          </div>
        </div>
        <CardHeader>
          <CardContent>
            <Avatar
              className={`h-${cardProps.avatarSize} w-${cardProps.avatarSize}`}
            >
              <AvatarImage src={cardProps.imageSrc} />
              <AvatarFallback>{cardProps.avatarFallback}</AvatarFallback>
            </Avatar>
          </CardContent>
          <CardTitle className="font-bold">{cardProps.cardTitle}</CardTitle>
          <CardDescription className="mx-3">
            {cardProps.cardDescription}
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default CardProductInfo;
