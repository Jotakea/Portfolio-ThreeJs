import { useRef } from "react";

interface CardType {
    review: string;
    // Add other card properties here if needed
}

interface GlowCardProps {
    card: CardType;
    index?: number;
    children: React.ReactNode;
}

const GlowCard = ({ card, index = 0, children }: GlowCardProps) => {
    // refs for all the cards
    const cardRefs = useRef<Record<number, HTMLDivElement | null>>({});

    // when mouse moves over a card, rotate the glow effect
    const handleMouseMove = (cardIndex: number) => (e: React.MouseEvent<HTMLDivElement>) => {
        // Safely access the card using optional chaining and nullish coalescing
        const card = cardRefs.current?.[cardIndex] ?? null;
        if (!card) return;

        // get the mouse position relative to the card
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        // calculate the angle from the center of the card to the mouse
        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

        // adjust the angle so that it's between 0 and 360
        angle = (angle + 360) % 360;

        // set the angle as a CSS variable
        card.style.setProperty("--start", `${angle + 60}`);
    };

    // return the card component with the mouse move event
    return (
        <div
            ref={(el) => {
                if (el) {
                    cardRefs.current = { ...cardRefs.current, [index]: el };
                }
            }}
            onMouseMove={handleMouseMove(index)}
            className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
        >
            <div className="glow"></div>
            <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }, (_, i) => (
                    <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
            <div className="text-lg text-gray-300 mb-5">{card.review}</div>
            {children}
        </div>
    );
};

export default GlowCard;