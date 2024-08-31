import { React } from "react";
import { stones } from "../data/stones";

export const StonesList = () => {

    return (
        <section className="stones">
            <div className="stones-list">
                {
                    stones.map(stone => {
                        //{/* Go over the array and read every object as JSON to be displayed on screen */ }
                        return (
                            <article className="stone-item" key={stone.id}>
                                <h1>{stone.name}</h1>
                                <div className="mask">
                                    <img src={"/img/stones/" + stone.id + ".png"} alt="img" />
                                </div>
                                <span>Color: {stone.color}</span>
                                <h3>{stone.description}</h3>
                            </article>
                        );
                    })}
            </div>
        </section>
    )
}