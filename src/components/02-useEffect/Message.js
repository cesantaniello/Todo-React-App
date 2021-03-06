import React, {useEffect, useState} from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0});
    const {x, y} = coords

    useEffect(() => {

        const mouseMove = (e) => {
            const coords = {x: e.x, y: e.y};
            console.log(coords);
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    return (
        <div>
            <h3>Eres genial</h3>
            <p>
            <strong>X:</strong> {x}
            <strong>Y:</strong> {y}
            </p>
        </div>
    )
}
