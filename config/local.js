let Host;

switch (process.env.NODE_ENV) {
    case "production":
        Host = ""
        break;
    case "development":
        Host = ""
        break;
    case "local":
        Host = ""
        break;
}

module.exports = Host