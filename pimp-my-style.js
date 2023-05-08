import { styles } from "./pimp-my-style.data.js";

export function pimp() {
    const but = document.querySelector("button");
    if (styles[0] == "fifteen") {
        for (let i = 0; i < styles.length; i++) {
            if (but.classList.contains(styles[i])) {
                but.classList.toggle(styles[i]);
                if (i == 14) {
                    styles.reverse()
                    but.classList.toggle("unpimp")
                }
                return
            }
        }
    }
    for (let i = 0; i < styles.length; i++) {
        if (!but.classList.contains(styles[i])) {
            but.classList.toggle(styles[i]);
            if (i == 14) {
                styles.reverse()
                but.classList.toggle("unpimp")
            }
            return
        }
    }
}