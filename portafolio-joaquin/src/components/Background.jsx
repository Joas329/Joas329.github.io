import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
export const Background = () => {
    const [star, setStars] = useState([]);
    const [meteor, setMeteors] = useState([]);

    useEffect(() => {
        generateStarts();
        generateMeteors();

        const meteorInterval = setInterval(() => {
            generateMeteors();
        }, 4000);

        window.addEventListener("resize", generateStarts);

        return () => {
            clearInterval(meteorInterval);
            window.removeEventListener("resize", generateStarts);
        };
    }, []);

    const generateStarts = (num) => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }

        setStars(newStars);
    }

    const generateMeteors = () => {
        const numberOfMeteors = 4;

        const newMeteors = Array.from({ length: numberOfMeteors }, () => {
            const fromTop = Math.random() < 0.5;

            const x = fromTop
            ? Math.random() * window.innerWidth
            : -100 - Math.random() * 200; // start left of screen

            const y = fromTop
            ? -100 - Math.random() * 200 // start above screen
            : Math.random() * window.innerHeight;

            return {
            id: crypto.randomUUID(),
            size: Math.random() * 2 + 1,
            x,
            y,
            delay: Math.random() * 2,
            animationDuration: Math.random() * 2 + 2,
            };
        });

        setMeteors(newMeteors);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {star.map((star) => (
                <div 
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}

            {meteor.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                    width: meteor.size * 40 + "px",
                    height: meteor.size + "px",
                    left: meteor.x + "px",
                    top: meteor.y + "px",
                    animationDelay: meteor.delay + "s",
                    animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    )
}