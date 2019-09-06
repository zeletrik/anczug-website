# Anczug website V2 #

A backend-less Angular based web application.

## Common usage ##

The mock backend represented in the `/assets/json` directory. Containing the neccessary json files to manage:

- Anczugs
- Images for the gallery
- Members

The component's calls those JSONs so if the JSONs are changed the update is live as well.

### Add new picture ###

- Paste the picture into the `/assets/img/gallery` directory
- Update the `/assets/json/images.json` with the new file name

Note: the gallery holding the oreder from the json 

### Add new member ###

- Paste the profile picture into the `/assets/img/members` directory
- Update the `/assets/json/members.json` with the new fields

### Update some anczug ###

- Update the `/assets/json/egyen.json`

## Run locally ##

```
npm install
npm run
```

## Build ES ##

Build native ES scipt for running on low end software pack

```
ng build --prod --base-href "/"
```

The `--base-href` stands for the path from the root

## Technologies ##

- Angular ^7
- TypeScript ^3
- Argon Design System
- ngx-gallery
- ng2-pdf-viewer
