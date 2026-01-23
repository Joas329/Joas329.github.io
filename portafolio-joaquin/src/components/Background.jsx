import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
export const Background = () => {
    const [star, setStars] = useState([]);
    const [meteor, setMeteors] = useState([]);

    useEffect(() => {
        generateStarts();
        generateMeteors();

        const handleResize = () => {
            generateStarts();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
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
        const numberOfMeteors = 10;
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
            id: i,
            size: Math.random() * 3 + 1,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 15,
            animationDuration: Math.random() * 3 + 3,
            });
        }

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
                        width: meteor.size * 20 + "px",
                        height: meteor.size + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    )
}