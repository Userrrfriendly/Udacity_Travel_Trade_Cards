# Udacity_Travel_Trade_Cards
A project started by the #greek community of Google Challenge Scholarship: Front-End Web Dev. The goal is to put in use some of the concepts that we learned at the Udacity classrooms &amp; to further develop our skills by contributing to this project. All contributions are welcome!

***********
**Early Preview**
![preview](https://lh3.googleusercontent.com/Dfon7R4UU1YBr5hAhMT2nbcHfJ34DWctGTpEtmW2-GgRUU5WcGddwc0icAneUs0_wk5ZByBkyT_HAfv99usfOp-0-WKsq0aq6zpvdydn5DYqjuP3C6kcqRusqt83fFDc5t3v7owUxUiQ-ePQHOljINBMy-or2UN1TrixJaqhF4gJgMDXFhu8s4zGqyU6F5g4fOkqcfgbw06D-TpSTLKOo-egzP16pBDem7Vhyx5rbRbCK_szzlksuXUOGNvyRoSoRdIO65XFCTDuj1Pcq4Yxje6g0VvkKM9ONsFqQMbAxf322Ny_Wz8YkxbPZWbm_eEKpbv4RAMc_lts-OtD7whg-PFDeXt91z-XQWWVGx55CEI1zuKWRrOQy_qJ_V7kxjRnAt-v2738FRCSywedETdYj31IenYIFZPvS7p3TFOCB3_lFo7LjHTjWrQ5digSWOzu4LsAF1CBHbq7TwnMvKoPQrZKIgQd19FdfqPm7FKh31uoxVJ4iRoUbvMiHzLTMyI64XMPEKG9uZ5ApZi_YwIk4F59gaWoMCZFo1uQPspsa8vw-_4qBjQJQB6rW_U1Vp5goKcVJizuR8YxWmdW4lOTsrEAl8ReFjfHCDmbmPo=w958-h484-no)
***********

To create a new pin and a new card just add a new entry in the const data that is in app.js
To add a new entry just paste the following code and follow the comments:
```
    {
    userName:'Veniamin Tsigourof', // your name
    udacityForumUserName:'tsigourof_ben6oqe', //udacity forums username
    placeName:'Mount Beshtau', //Name of the Place where the photo is taken
    altPlaceName:'Бештау', //alternative Name of the Place or the name of the place //in its native language
    description:'Бешта́у .....', //This is the description Tell us what makes it //special!
    latLong:[44.09749, 43.02235], // the latitude and longitude of the location
    imgUrl:'./img/beshtau.jpg', //the url or the local path of the immage
    country:'Russia' // Name of the Country where the picture is taken
    styling: false    // set to true if you want to add some style
    }
```
**********
**app.js**
![preview](https://lh3.googleusercontent.com/7ztFp6NtyHb-_xnhIRu6udJUx2ychK-bRKMAfY8cJxNTAifIwvIN_NxWwb78HoqlZqQRLBPe8pEUy3q0DUmvyUByVjwnNyn2fsCmk6LiDVr1xdXwIthR6aUiYRLfXO_RxzarhrkeoHAOxM-Xoakdo7O3Otpp4hOnCYE03-XwnPKqjAORGoD_nInn2KisJCBAWuhpcEffhhwcaz-WgwI0qxFztBuTSHfEtiuzuZyfM5gf1pmd2qQrkxI3G4ICQPFr3UJOLLe6i5qnQIzSxvXp1QKIJXeGN689QHuFNT3sqSE9--i2A3dkb7Hr4LdARdF0H0gOKHCnDYi3Wt-1mQ_wUgvof9LH-kY24gDS2o1NuhSmbAsGoeo5lSOfrxqsNt6lf_LHrBlNV_7VlcQOZ0PuDwyHCKPe-9GpRj3UKKpA8jmIkGmeh3fyEm4QGJ4vNT-TeD3Cms8erTXtOCZ8O2WVHjz3H-TJeDydDPfrQ6BFwK38VQp9DXi87nTZa3WAEJtnMHpTUnTwzVoxrxwZR-weUaj5O6xo1PQUU4pO1NcVeyYenuJT_t64f0LuMlatPJEVPLj7oEvNchQxeXnSWQbmO1Yj6O4ExTeoojfq25Q=w958-h498-no)
***********
To add your card's style, open styles.css scroll down to the end of the file and insert your preferred styling.
You can use the following code:
```
  .your-udacityForumUserName {
    border: 1px solid #BEBEBE;
    padding:10px;
    background-color: #F0E68C;
    box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2),0 7px 20px 0 rgba(0,0,0,0.2)
  }
  .your-udacityForumUserName .card-title {
    font-size: 1.3em;
    margin: 1em 0;
  }
  .your-udacityForumUserName img.card-img {
    background: white;
  }
  .your-udacityForumUserName .card-body {
    margin-top: 5px;
    border:1px solid #D3D3D3;
    padding: 25px 10px;
    background-color: #f3eba5;
    box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2),0 7px 20px 0 rgba(0,0,0,0.2)
  }
  .your-udacityForumUserName .card-subtitle {
    font-style: italic;
    font-size: 0.9em;
  }
```
***********
**style.css**
![preview](https://lh3.googleusercontent.com/Y7VQ2b2qPhlK4a4PTfJqOdzTuxijZAXuy3nt5JWb6zMMKpVSiIBOb3HowylZwZLns6nWcf4pswW0PBwtTyeb_F5dhKY1TjzoLUcNbNj7_7XaoRxU7EiNaU5jWYFDB64tqMnVSfleO0ZQVYF5xc2vkAdER7Ale9uciyCJMjoQ9uEt9zjmhvzSZEb5aXKc5TxI0vaFkd5MdY7oNNKXotmSI-KaYGg5KawXUwuwFwCL7KcoIlfmwfp5HX8P5PY4-PpbrJ_pnc4NN4xnJ9tePV4jt4eiLaUw7vo8ILFW0vhVPyVqNzKexBJ03cUSlZusom5DP9f4IaGv1VU5tDWO4_ZVcHBh1DT9KQxYdyALP2eZU_fhKpr4FoqxcRb1AErJVTsGd9cr9Fp8Ts9IRQZzdywHKQbi1H4-aTPjV2MPZ1fAogmtPZ4UxP4969RKFx5RYPHq_LKN6mGcCAamfUj8AS38EXU_wzlr-45Aau69aHT2bN0FG5mms4cIw6XjUCKmvhrsZPrxkxK9joknBpFsbRd8IBIqWhyXZg0T3xfA2B6FS0apZw0HYlZYd57WBWO9Kuinj0hsA7I4pradTXrk6vgY03Z-wNEi6k8iqptnZ74=w958-h500-no)
***********

##Some help with GitHub

### Setup

First let's get setup to do the work

1. Login to your GitHub account. If you don't yet have an account then [join GitHub](https://github.com/join).
1. Download [GitHub Desktop app](https://desktop.github.com/).
    + Alternatively if you are comfortable using Git on the command line you can do so (here's [first-contributions](https://github.com/Syknapse/first-contributions), a similar project that can serve as a guide for the commands needed). OR
    + If you use [VS Code](https://code.visualstudio.com/ "Visual Studio Code website") it comes with integrated Git and allows you to do what we need straight from the editor.
    + However the simplest and easiest way to follow this tutorial is using GitHub Desktop.

---

### Step 1: Fork this repository

+ The objective here is to make a copy of this project and place it in your account.
+ A repository (repo) is how a project is called on GitHub and a fork is a copy of it.
+ Make sure you are on the [main page](https://github.com/Userrrfriendly/Udacity_Travel_Trade_Cards) of this repo.

| <ul><li>Click on the _Fork_ button</li></ul> | ![Fork](https://lh3.googleusercontent.com/bhE-3u2EaB440mwqcylCkEa_4tNzT5sVYwMwQeKPKlp6htxym3ULCGjRgM7Uqd-1X60oe-BQOTFDSKkgeaAnyI7YNeCYOmCkoZ8jFjTslnaPfiZtFHw4lJ03hqTVSvkoiQtcDTHseKVr8A02ROE0DGRsy55D9k2i4jqKjKa5ImrY6X2rYfn1uNp4Vlk2Q9CGiF_kV0qkSZDqqnAfUJdBz1R7O-KIkk_RL59jUwOTBZcuBsAnwn5f-JySHnP4-zZqfi__4-Tf71-p2NO25MyXfyc_fk9P9qV4CoYHbwXbjsZUMoFyNgXo0SVI24vSRKitZ5TNgcRMvoTa8H1d5rOpyC6nVGGGKzPKl5sp_tujTq1QWnf4adA2b1CdPe8wOapHLX-iVrLQMJ1AUo_mRsNkea05nP37AEXv8563h2xvU0g7Zx8q3F_WUsKdmR_vnsIp8mGCLuVY1clqW4agFy_AY1z5gDidhIUeT3_pY5dBaACBTHs80N7PlTq35aFS_50JNrFScAfr5v0O0WGJvnXNBHAr9VoVyrgxiZ3VK9FUvoj8uVooK2Yh1rSjI_PcSC31F-7VDdk1_g_gqr3SpJFcU-T6thcDVD5e5eqL3gw=w346-h113-no "click on 'Fork'") |
|:---|---:|

You now have a complete copy of the project in your own account.

---

### Step 2: Clone the repository

+ Now we want to make a local copy of the project. That is a copy saved on your own machine.
+ Open the GitHub desktop app. In the app:

| <ul><li>Click on _File_ then _Clone repository_</li></ul> | ![Clone](https://lh3.googleusercontent.com/RixZsf4GIYlC9HIwy2r5a8WLrlS-OEodlOurSeSF6CXmIPSfwV8p9MMwrInX6iwXkD9AbHj2uqiQHDTUM5e_AzAYWp0FhsYmdWRqWJZWIr4Ogk7y57iNFK9EJR9XHZq5HMEKKr3Dy2oTsqwtddXoPn_jVUl1DHEvNEoeC_6chQMW45p61NbBOBKVbDYY6N84y4HxPBvVFX841Zy72IG_Fp8te3KPkNeVGWo3YYYsFPbVe9b81qhaRiGzggaDcqmZNg7QrfOT9f0iVb5T7gz_MV6z-9VNcOfokOcUaV7xE7GnZZHJ17fKdEzXjcVRvuhGM8MCfbd_Ntm1ym4If8PFuXrneLMNNCk0XBpmi7QKPbmVRWf-ui-q7v-QRV-C_n1I2kKcJpWg7KOSqaTFwwTzrGFC1k8Nfb2lJGJbwG1bhPjfMzS8G4eqDOQb8_nUjb2S_4leauSKA19baTg-U8ddfez9xa3H5OfZClsI7PXCFNQvkujmBpw4K70D3VL3t2WVK0EFoPKJI6nTPI9gLbLv9F0PaS9Ys1K7tAerqf71d3DL6DET0sF1gyndcSS-t8SMj8mVcpu1CjEwEKKBhclVJ9uQE-6wRW6eInl54YQ=w313-h251-no "click clone repository")
|:---|---:|

| <ul><li>You will see a list of your projects and forks on GitHub.</li><li>Select `<your-github-username>/Udacity-Travel-Trade-Cards`.</li><li>Click _Clone_</li></ul> | ![Clone project](https://lh3.googleusercontent.com/upKL6FnZS9ZZLVSS17uDLRolBzV93y-WqYN4nC4H-so0O17y-1RBoQUNpNYEp_x2juQZnhCKncCuu5ERXkhZohRUgObK7_wb1pElgi-2ocBjQTv9sDN_27u9ZTnVTkXZQk_P8r2-veVnIdk4QVqxRfCxa_tXY2dJf3A3r5cQk0jZnJczDB_d8kH3YZ1At1kEKPvxbY3DIirtGWYER_2bCDMkq9XwpwgrRFT-FlUlIfZdqy9jl48crtwFvvv1ET4GFkMdV2JK1PMozomIJ0iLIvQ1ZjuRv4wDv6SXSN-4EDYLa68lvikkorVWO13d5DdBjtj7pO84VRKY9I5lQs6WCA-h76oNRxZaoJkKRydl4IHoh2YD3u9_WyX7zE8yx5pPmSdYFPoCDS5N4yOo6BuuH9tXevp6Jlx6au7UoXFOSkdkrRCVkny5BdDWtYN3_I-33m9I-ttcWCMs_O0jMH9DRn433BedIIN_q4zSwsH0aWpmb3GNQW-orJ-Llit21Lar_r4U_TK8mxtst9sXlSdMS89dSKlVuLsb9j4l3ACC7niBPsHJlZ8xVpAb2czhajLI7BkTYk0vTP_GknQT8mc6InQTWzmFIv-cuzPF7Jk=w457-h494-no "click on <your-github-username>/Udacity-Travel-Trade-Cards") |
|:---|:---:|

<ul><li>A forked project will have the fork symbol on the left.</li><li>Your fork will have your own GitHub user name.</li></ul>
+ This will take a moment as the project is copied to your hard disk. I recommend that you keep the default path which is usually `..\Documents\GitHub`.
+ Now you have a local copy of the project.

---

### Step 3: Create a new branch

+ Once the repo has been cloned and you have it open in GitHub desktop it is time to create a new branch.
+ A branch is a way to keep your changes separate from the main part of the project called `Master`. For example if things go wrong and you are not happy with your changes you can simply delete the branch and the main project won't be affected.

| <ul><li>Click on _Current branch_</li><li>Then click on _New_</li></ul> | ![Create branch](https://lh3.googleusercontent.com/O1COcH-3B5HB9PLEeDWWj6GxfIwtg9pfxoU29saEIX8Dxk8Og5RvQEUh7xq0TytPFlq_STvcdKVi_5xQ59ndoFUwGoRrHssCdeBm1OcVzYHO3-pEOqRheBE1BGF5msQx-EUl5XOjtiRgxgTAEr0g-nltJ-oLcw-VXf3Jt2a6l5qpCvjtY2JGbDZNUEXm-Su1gd5p1O25ut7-QxJ53J2Wama_qUNv6I5K59evfp0JTWw0XpvIEkpMifDfsHW9A4CjWJ2Hmie4dyaY3QygCZX-6freeQnzXdBRIvtEwQ1otqPZJJg2YuJbj6QGszDi2gFpgeWVeXXuhMgtyoAErq0QG6IJOopL0QE6_6pvAcPBQZEJW0EITYNbK-MTxpCVqx3gGDjnRaZZzednShDKL4dghfSvbS3cn2u3hQ7qjBDHGYaORHjW0qh5sszp1ttl8H9bZZKfZpWk8b5l4vD5_sk1mny50U0ggGdahaH2chdcKH7gsonqrDtZBVgwE49n8nsVJOjn1uj1NfZfITRVtJ7Jx6E0FIn-wBNn_XkxlJEFGfqWDLbJXXO40BQU2_RH0AcX0HrAxbotj1qEC7ifLGQLPtAxqj488JMdqsuKnbc=w939-h563-no "Click on 'Branch', then 'New'") |
|:---|---:|

| <ul><li>Give your branch a name</li><li>Click `Create branch`</li></ul> | ![Name branch](https://lh3.googleusercontent.com/H6pwODR7AkCzcl2UiBlXjLh2uuh-4-6JvJAGLpQlsE93a54pZIfieQojDPLBLgQbHJb2E7hvunpFM_o-iGVBMmUkI6kTkDORq5UXnQ6hlsfygEICZX-QdK8qA5C-l1Z2WBVNQNRRKtMbZR3B1JQix8NmTfnPNc4vmkaVW3tDIBnOgqvEVEOePjmYtWhlLrbG1snLXSlsmqFubPfO0CUCCZZa3ogK72b2xReQb0GOvQVTCe0-e0d7-BsIsygyqDD3JhnpUaeLeoI9BiLbz7pHChYaYh19AXOe6pZr1Vw3OGEy1Ah2Nm5__Df62Cm1Z2hPx7JrW5fYA1EpXwZrC895ypbtEL6q6ePtSDabi1B1iawX2y50ftyuH8FsaLk03LUF0tidLPNX2BTKZDh_DLK-o1Z5zpBmjv589ATbyBgfPe7kVKDuiYD9WbFU3hqjYnS0nPB6_nv5c-zVdFBSfacuviViylGsGgzjKuTp_1B-InQStTCh0TFBW-IFBTy-Vwi2wR9tcgINekMe8ygckyRundqneQS6OkJvtVSkrKjF9lsbMomPdXC4DSUN46Iyd40d0AJ31NMfD5YZvMuG_FCNS4nrWw8LOHLFWBBoVDc=w432-h299-no "Name your branch") |
|:---|---:|
+ You can name it whatever you want, but since this is a branch to add a card with your name to the project, calling it `your-name-card` is good practice because it keeps the intention of this branch clear.
| <ul><li>Publish your new branch to Github</li></ul> | ![Name branch](https://lh3.googleusercontent.com/TQrF7P04ws7Fa2hNuKJOCu531wynxwY6-wBExjXmYu5PmgFDu5daJ3Ol9__luKpuLl7Z5D2Bn82fgN0Z-nllO-fl9fbczWAnSsNLtssMToWF3JnGeaKfoKxIRNknd2v_cv72_I1uxmXu3k2ASUKdSZJy9CEw7sKjQhUYHK7BA0RW0SHH7hHKIiNWRo834Qyc0M5zXKdNn9mvNl6BPrlmiAyqjfLhBrF9DnyWxInTiple_tn0fhwni0QFMoVKAngISbNNR0gXMECsVwYl3JpW62CUMmkRQTfuAg7W1R3WN11aAOHbYEz6biymJoBaTTejeTXuT53ePb16XzGvAs1_bXkeUqMgrP6wf22ede1xkFp9uNO0dcCRbbf13Ej0rpO7MqR4qcmlSQJ-_IoSsHWDv05VkeP8qKa9Hm9D4Q7PGT5O62S2nSwJ9pOtcY-KSFi6fqEK-y_hSDkNWqIaK6xVDp8-yCPCgKdnVgTmTK6L39gaJHmA4TKXsvUbFEbGOS-TiKvX4UhxcrUwwOr83i3yPhp3qbXDMCUkfSwF9kJjmfiaamrOGndOE-yRMsac9kvUUpm7AyJdsyuy0AZDcmWUufMeuqSx4yRSsbU_qC4=w232-h53-no "Click publish to send the new branch to your remote repo on GitHub") |
|:---|---:|

+ Now you have created a new branch separate from the master.
+ For the next steps make sure you are working in this branch. You will see the name of the branch you are on at the top center of the GitHub desktop app where it says _Current branch_.

---

### Step 4: Now you can do your changes to the code. Open you editor and insert your card.

---

### Step 5: Commit your changes

+ Go back to the GitHub desktop app.
+ Your changes will have been added automatically to the staging area.
+ This means that Git has recorded all the **saved** changes.
+ You can see this reflected in the app. Everything you have added to the file will be in green, and deletions will show as red.

| <ul><li>The next step is called _Commit_</li><li>This roughly means "confirm the changes"</li></ul> | ![Commit changes](https://lh3.googleusercontent.com/P4KL4RU92zDIyn-diwQDKzM_4usB-q3cZ8O91qygtbRnTUc-m5MO3YvelvMPOrldo5y7zUHJTn1YH8pStORgC_RXmpyBT9vlZcxsIhoubiSZM6edBP9zNVPKHYzzShHk4jAp29Gc8MOqGnMsVZ_1XwZg4GJPBIrPXiWwPUUEAIOK3vrN6yb0ABF6uJTlF9etvW-Frk0XYW4-x8Is7rx_eR7HVQIUuL-cS_cnRwiTZCHgi0Hbzr_NIdSBt4VdIwkOPvtqdDLNbamR6eSH8bLQFi4H5MLG6w8Lqaru1D1_k6SqSYWq6uh9HGcmh4C9C6CMkP5RmVZzjSt0MC62yZ7toLLrPn-pNQgbDEwGAWO79X2xvv9JZD3Q-os4-DsPIX2JXEgEcPs5bD07TJh3G71OcU77i4rOEgEINERrjg6_c9Z2RW2vgKwI8XBoyNQB7OIoVHH5gz2GQSq-CP_ZdTAnZkaO_1D815Piw1JFXc2eypKPUm1QJ2mW5t2avt8lHkQUZOtLcv7NI-7CJmDX1ojDTER0Sv31bK_ZAWeoRRSx4o-XcmovoGVZk1Klf_XD09S2v7lGV97EMAjz68OFdQTPWff4fHNKYVJsGnQFxWI=w886-h954-no "The changes you've added should appear in green on the right side of GitHub desktop app. The commit button is on the buttom left")
|:---|:---:|

 <ul><li>This is what your GitHub desktop header should look like</li><li>Notice the fork symbol next to the project name in `Current repository`</li><li>Your `Current branch` will have the name you gave it in step 3</li></ul>

| <ul><li>To _Commit_ you must fill in the _Summary_ field</li><li>This is the commit message explaining what you have changed</li><li>In this case "Added my card information" would be a reasonable message</li><li>Optionally you can add a more detailed _Description_</li><li>Click the _Commit_ button. Your button will say something like `Commit to "your-branch-name"`</li></ul> | ![Write commit message and commit](https://lh3.googleusercontent.com/4JSVZYqqfSwle4nZTLia2dN-FxwBz8HNvRH7y8v3ZjzDytFthMQhqgaaIB4WDpVdGXF8AVqF-FrldjAbOmHYiSW1VONkD3CmzrXwQTIhW3oewrCw4tmYMcQ6wHy7YJxneeOa2iY-60MUH8nbJB3Xb9qOoCQCM0XRVbpbqdXAEUiRxq_lyq4x8P4vLWO326S_5jc3wFFpl1pYb6eEMhbRVyu9Np-IOM_-U7ElvlZpe9VlTIhWEqXaUB8CJu2RfWzirV5apApTSH__V7nVFJQKgDpE3-lcHlxmQuG_7xdLKWnzkgAgUIvWKDFf8eqtK91oYapMnD7yxcbxrRNmVrHIgMgPW73NbGHRvvIJfsvFPhQvT0rfe-rn9n2VlMPjnAqyUC3x1R8t8nuTAwBan25auLLSEWlKFJ3tE8s7diBENrSisTfUE2D0N_-DQN7H2TWTuyBwRHmXTHAUBoFoKfux65j2V77U9w1_A-ON3MNPP5tjpZOBFxwKtWt8RPut-9mXkeGrK87EskQuKKzktfVUd_NlwljpSxXFvabMuDW-3EYosH9Wm6ND9bMSLpqD1ldGEXUNxznThhX9nKGil29gCsZ9a0POAsGiSxDnmUc=w238-h206-no "Write a brief commit message in the 'summary' input, and click 'commit'") |
|:---|---:|

---

### Step 6: Push your changes to GitHub

+ Your changes are now saved or committed. But they are saved only locally, that is on your computer.
+ Synchronizing local changes with your repository on Github is called a _Push_ (Push origin). You are "pushing" the changes from your local repository to the remote repository on Github.
| <ul><li>Click the _Push_ button</li></ul> | ![Push to GitHub](https://lh3.googleusercontent.com/DGcTzCr-OKxLfUMyQ2TpB0SgysJvzGQnrM3ucPaZF9RIdXbLLyCMUNpG_fJf7jJCgHTFYNl0nK5dT4jdJLSfhycvIfmpcNuW4MQ705kbJuojO7cmyJr8k2KTBEp_8BcyNVZR8wYeWyqLvv4yQNDQ1Q2ktoBbZzWsDVbCWbeL8M8wCijgLstGx3XeZ24iuZDG6rz2cd3soLzEk9icwaujKb_N4TykKXSFdE14i4IgE_NXOMzMQrVa5j-p1fafWWOhgualkdc_h3fmyQTsRHPiQa5f2OU1hw2ubpqNLiEXsEKQ9Dcty4vTso69ELORuE5ojhaK1qMgxxdXf98ASWl-ekwFErlzMJRLvYmzUbzN-QA3mMCGekFbcgjjxKZy6UXrznXcuAYJ1iTibDR34d68ZSJF9LKaDw4QUodF905-0h7s2jRgPNARBVM1rUUIiD2pXAtrm7QOLBfCHkkScYJD_DRK1IMUeTPoE6DkWjPrvmwwfg6e1UzMh24hWBz36ro5Ppi84dArqH9DUBWmjKJhipb0WK26j30ekJQexvjyJb3u0RSPGdGIs51C7Pn41XIBCBTP_5WEhItG5CJWbAl0hFXuNwH3HZKmhCcjn84=w651-h127-no "Push your changes to GitHub, click on the 'Push' button") |
|:---|---:|

+ After a few seconds the operation is complete and now you have exactly the same copy of this branch on your machine as well as on GitHub.

---

### Step 7: Submit a PR

+ This is the moment you have been waiting for; submitting a _Pull Request_ (PR).
+ So far all the work you have done has been on the fork of the project, which as you remember resides on your own account of GitHub.
+ Now it's time to send your changes to the main project to be merged with it.
+ This is called a _Pull Request_ because you are asking the original project maintainer to "pull" your changes into their project.
+ Go to the main page of **your fork** on GitHub (it will have the fork icon and your own user name at the top).
+ Towards the top of the repo you will see a highlighted pull request message with a green button.

| <ul><li>Click on the `Compare and pull request`</li></ul> | ![Submit a Pull Request](https://lh3.googleusercontent.com/a2HvsQe70WUuuK0dJlF-FQlHmeOJ-xWpl1ehpvd_pia3A0gI5tfAVidJ5Hp942CAORopQ29jLKeW9onghPdafwC23H_flsp331z0Cc3FINpKPw8ll07VvQOw79msuMjor9Y9RLIyv-KusUpWCQBxdIbISpFqmyoiKwsOKX_kwP0GaZArwSRct1-CGscWloiBTbAGmYOzWSaa-smnP2lS0neX8x0smMM4H0WHKjvz0EfX_kN8MUbhs9JNPWCFLUIVQCY74oOskwQ0evk7cjNqqUOXL5g0eaTsMNETbqtsjE8J8znT40RJEFgB4vWLh4eP4yLPbndl1sXec3nV2rf4qqb1fhcYUl6KN-Ca9c2zlxJPLs5WHHY7Y_91eHgqRabzyXVyb26ZAs2yB5oW-hFes6P6aF2E_Lz1T2-PTFAkiIevF32bFF9LDgt030Aqwqoaha056FUlxrDBG7WuHVzrhEZejU8Q4qEgxWldQhBd3JebcgpOMds5opjMR5LpCCRoXOWvQPyCP66_PHPWvnA1B41MiKjFkusmCBOUMAtMEJveTRT7F5NouDlFjwIvA0g1S4b0VbRtIuOzfmAtsbQifcPHyqcjtCeyS6wSOE0=w958-h109-no "This is usually towards the top of the page, under the description and above the project files and folders") |
|:---|---:|

<ul><li>This is what the `Open a pull request` page looks like.</li><li>REMEMBER _you are trying to merge your branch with the original project not with the `Master` branch on your fork_.</li><li>The image below gives you an idea of how the header of your pull request should look like.</li><li>On the left is the original project, followed by the master branch. On the right is your fork and the branch you created.</li></ul>

![Open a Pull Request](https://lh3.googleusercontent.com/7UtiJhYPrbwCgfqt1JCjxORD7zVqAHyJgtDwyD3nVuKBswx45O7FYkVrCcPbBSjlVjwNTB7OQgAg23wnYor0INIhHwfnnRfcjTeFWUst8XMXPySRmho8em8D0EsH1TkMhRSrIBJzYkgCnLH0YecO_3t9Mc6yNcS6_cQPiIP682rL4DlMzbjrVezh7Zpu-ASGB0y_zP9g0CRluuLAg2PmUHPQtSyA7b7jKhJ_SX8g2yWOC9_Q0sGrP1V8_SZjvqxStx7UBlWjOHlPCiAxRid6Ny4ydbPy-_jQRzJS9gmsIiYB5FXqJbG5j704bVzPxmzn6VvuZc8VAatNL_cR1kiGN-bnVU2pwld3eqzpKuVKp5N0njtCmU6Ohu76aJDFCAFa9eXjjaDJoYIOhlDmd4s4MMa7X5LZGAyQXkisv2BQiJ_7OMoqpvUaq2MEBHGPsXJWt-LMrd17FPhQVzaAfKKybGHM9k8qi8wFlUOi61BlV63Cc7O4ZphzbZDtwXu2cgAR6Hx7zGIHx1scUOuLyDBRSTXJf9TENgyzBIbTa1SZ5eclg6so_Jpv41nbLe4Sf4BwimA6BhVD_ixRk8tVr-xb-FgtMhmNPwmtFTH3Lio=w739-h357-no)
#That's it !!!
