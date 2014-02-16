echo "press Ctrl+c to close dev mode"

(

    grunt serve &

    sleep 2


    URL='http://127.0.0.1:9000'

    if [[ $(uname) == 'Darwin' ]]; then
        echo "Mac detected. Starting safari $URL"
        open $URL
    else

        if [ -n $BROWSER ]; then
          $BROWSER $URL
        elif which xdg-open > /dev/null; then
          xdg-open $URL
        elif which gnome-open > /dev/null; then
          gnome-open $URL
        # elif bla bla bla...
        else
          echo "Could not detect the web browser to use."
        fi
    fi
    grunt livereload
)
