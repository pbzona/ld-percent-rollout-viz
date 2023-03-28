# LaunchDarkly Percent Rollouts

This is a project to help illustrate concepts behind the percent rollout release option in LaunchDarkly.

## How to use

After cloning this repo, you can install its dependencies by running the included setup script:

```sh
./setup.sh
```

Copy the `.env` file and add your SDK key:

```
cp ./backend/.env.example ./backend/.env
```

When you're ready to use it, execute the start script:

```sh
./start.sh
```

The web application will be available on local port 5173. You can view it by opening a web browser and entering `http://localhost:5173` in the URL bar.
