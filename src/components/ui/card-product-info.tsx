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
}

const CardProductInfo: React.FC<ICardProps> = ({ cardProps }) => {
  return (
    <div className="flex md:flex-row items-center justify-center text-center my-4 mx-6 lg:mx-2">
      <Card className="w-96 md:w-72 lg:w-56 xl:w-64 max-w-96 h-64 md:h-72">
        <CardHeader>
          <CardContent>
            <Avatar
              className={` h-${cardProps.avatarSize} w-${cardProps.avatarSize}`}
            >
              <AvatarImage src={cardProps.imageSrc} />
              <AvatarFallback>{cardProps.avatarFallback}</AvatarFallback>
            </Avatar>
          </CardContent>
          <CardTitle>{cardProps.cardTitle}</CardTitle>
          <CardDescription>{cardProps.cardDescription}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default CardProductInfo;
