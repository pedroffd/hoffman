import { ICard } from "./components/ui/card-product-info";

export const homepageCards: ICard[] = [
    {
        avatarFallback: "Communication",
        avatarSize: 24,
        imageSrc: "/images/communication.png",
        cardTitle: "Communication",
        cardDescription: "Currently, the medical community is behind the times when it comes to communication technology."
    },
    {
        avatarFallback: "Inter-office",
        avatarSize: 24,
        imageSrc: "/images/inter-office.png",
        cardTitle: "Inter-office",
        cardDescription: "With Interoffice Messaging, you can communicate with physicians outside of your practice."
    },
    {
        avatarFallback: "Security",
        avatarSize: 24,
        imageSrc: "/images/security.png",
        cardTitle: "Security",
        cardDescription: "Messages are encrypted and deleted after (amount of time) to comply with HIPAA standards."
    },
    {
        avatarFallback: "Native",
        avatarSize: 24,
        imageSrc: "/images/native.png",
        cardTitle: "Native",
        cardDescription: "Eliminating the need for inefficient phone calls and emails. Your staff and patients will thank you."
        },
]