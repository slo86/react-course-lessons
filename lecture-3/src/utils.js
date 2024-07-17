export const pageScrollPercentage = () => {
    return Math.round((document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100) || 0;
}
