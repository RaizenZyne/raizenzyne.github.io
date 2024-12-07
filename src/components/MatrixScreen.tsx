import { useEffect } from "react";

export function MatrixScreen(){

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789';
    const letters = characters.split('');
    const fontSize = 10;

    useEffect(()=>{
        // Initialising the canvas
        const canvas = document.querySelector('canvas')
        if(canvas){        
            // Setting the width and height of the canvas
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const columns = canvas.width / fontSize;
            
            let drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = 1;
            }

            const ctx = canvas.getContext('2d');
            

            function Texts(){

            }

            Texts.prototype.draw = () => {
                if(ctx){
                    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    for (let i = 0; i < drops.length; i++) {
                        let text = letters[Math.floor(Math.random() * letters.length)];
                        ctx.fillStyle = '#0f0';
                        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                        drops[i]++;
                        if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
                            drops[i] = 0;
                        }
                    }    
                }
            }

            window.addEventListener('resize', () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            });

            return () => {
                window.removeEventListener('resize', () => {});
            };
        }
    }, []);

    return(
        <canvas
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            }}
        />
    )
}