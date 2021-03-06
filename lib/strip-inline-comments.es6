import postcss from 'postcss';

export default postcss.plugin('postcss-strip-inline-comments', () => {
    return css => {
        css.eachComment(i => {
            if ( i.raws.inline ) i.remove();
        });
    };
});
