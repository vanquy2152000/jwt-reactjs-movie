const uiConfigs = {
    style: {
        //background
        gradientBgImage: {
            dark: {
                backgroundImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))"
            },
            light: {
                backgroundImage: "linear-gradient(to top, rgba(245,245,245,1), rgba(0,0,0,0))"
            }
        },
        horizontalGradientBgImage: {
            dark: {
                backgroundImage: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))"
            },
            light: {
                backgroundImage: "linear-gradient(to top, rgba(245,245,245,1), rgba(0,0,0,0))"
            }
        },
        // lines, text 
        typoLines: (lines, textAlign) => ({
            textAlign: textAlign || "justify",
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertial",
            WebkitLineClamp: lines
        }),
        mainContent: {
            maxWidth: "1366px",
            margin: "auto",
            padding: 2
        },
        // bg image
        backgroundImage: (imgPath) => ({
            position: "relative",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "darkgrey",
            backgroundImage: `url(${imgPath})`,
        }),
        size: {
            sidebarWith: "300px",
            contentMaxWidth: "300px",
        }
    }
}
export default uiConfigs