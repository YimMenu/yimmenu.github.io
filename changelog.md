# Changelog

All notable changes to this project will be documented in this file.

## 2024-06-27

### Miscellaneous Tasks
- Menu revamp ([#3274](https://github.com/YimMenu/YimMenu/issues/3274)) ([4589b87](https://github.com/YimMenu/YimMenu/commit/4589b87553320d7065be68c72089ef1a60e8c9b9))
- Complete player and network UI redesign, meant to show all features instead of stuffing them into tiny boxes ([4589b87](https://github.com/YimMenu/YimMenu/commit/4589b87553320d7065be68c72089ef1a60e8c9b9))
- Added option to delete player vehicles ([4589b87](https://github.com/YimMenu/YimMenu/commit/4589b87553320d7065be68c72089ef1a60e8c9b9))
- Better clone player (now clones head blend too) ([4589b87](https://github.com/YimMenu/YimMenu/commit/4589b87553320d7065be68c72089ef1a60e8c9b9))
- Better host token spoofing, with an option to enter your own ([4589b87](https://github.com/YimMenu/YimMenu/commit/4589b87553320d7065be68c72089ef1a60e8c9b9))
- Better host token spoofing detection ([4589b87](https://github.com/YimMenu/YimMenu/commit/4589b87553320d7065be68c72089ef1a60e8c9b9))
- Better desync kick prot detections ([4589b87](https://github.com/YimMenu/YimMenu/commit/4589b87553320d7065be68c72089ef1a60e8c9b9))
- A script blocker for the entire session (per-player options will be added later) ([4589b87](https://github.com/YimMenu/YimMenu/commit/4589b87553320d7065be68c72089ef1a60e8c9b9))
- Added option to spoof data/DLC hashes ([4589b87](https://github.com/YimMenu/YimMenu/commit/4589b87553320d7065be68c72089ef1a60e8c9b9))
- Logging framework that allows developers to easily debug false positives ([4589b87](https://github.com/YimMenu/YimMenu/commit/4589b87553320d7065be68c72089ef1a60e8c9b9))
- Major protection improvements ([4589b87](https://github.com/YimMenu/YimMenu/commit/4589b87553320d7065be68c72089ef1a60e8c9b9))
- Block_join_reasons cleanup ([#3290](https://github.com/YimMenu/YimMenu/issues/3290)) ([10d0e72](https://github.com/YimMenu/YimMenu/commit/10d0e72285491ba1d816f3e2dc78a233eafd965b))


## 2024-06-24

### Miscellaneous Tasks
- Filtering blocked modders in session browser ([#3257](https://github.com/YimMenu/YimMenu/issues/3257)) ([1196bf5](https://github.com/YimMenu/YimMenu/commit/1196bf5279006dd7789e29319e6543c7f9078728))
- Filters to the player database ([#3268](https://github.com/YimMenu/YimMenu/issues/3268)) ([43ddc04](https://github.com/YimMenu/YimMenu/commit/43ddc04dbede596aa81bf926f9a91eb90a345371))
- Update outfit slot name global ([#3280](https://github.com/YimMenu/YimMenu/issues/3280)) ([f3cf7b5](https://github.com/YimMenu/YimMenu/commit/f3cf7b5983fab129efa309ee45a84d68e82191c8))


## 2024-06-19

### Miscellaneous Tasks
- Add show_success lua binding ([#3249](https://github.com/YimMenu/YimMenu/issues/3249)) ([a40f4a4](https://github.com/YimMenu/YimMenu/commit/a40f4a4956cbd647ed90a0e7d799e457e541c705))
- Add break statement to CDynamicEntityGameStateDataNode ([#3261](https://github.com/YimMenu/YimMenu/issues/3261)) ([2f79436](https://github.com/YimMenu/YimMenu/commit/2f79436d8efb7f673b46b39c4e667b5a9f4fe3f3))


## 2024-06-02

### Miscellaneous Tasks
- Added block_join_reason ([#3215](https://github.com/YimMenu/YimMenu/issues/3215)) ([5897228](https://github.com/YimMenu/YimMenu/commit/58972289b198edc89178999ddf5648e718618a8f))
- Add new spam words ([#3204](https://github.com/YimMenu/YimMenu/issues/3204)) ([4adcc05](https://github.com/YimMenu/YimMenu/commit/4adcc05cf35704c0c964e9b0350070435bdc7288))


## 2024-05-30

### Miscellaneous Tasks
- Break game and protections ([#3203](https://github.com/YimMenu/YimMenu/issues/3203)) ([a218f84](https://github.com/YimMenu/YimMenu/commit/a218f84eed66c44bb09d21c62978acb271c67792))
- Block join reason to reaction ([#3190](https://github.com/YimMenu/YimMenu/issues/3190)) ([fd939c4](https://github.com/YimMenu/YimMenu/commit/fd939c48cbd3ca2eac345bfbb3fdf9ba9b1fc165))
- Chat spam to reaction ([#3192](https://github.com/YimMenu/YimMenu/issues/3192)) ([78b4302](https://github.com/YimMenu/YimMenu/commit/78b43027216d753284976c6d96160a0aeea0af66))
-  Disable Vehicle Heading Updates When Vehicle Flying in First-Person Mode  ([#2991](https://github.com/YimMenu/YimMenu/issues/2991)) ([9df32a3](https://github.com/YimMenu/YimMenu/commit/9df32a3adf1b6e7e115803edb6c2eeee1a24896f))


## 2024-05-24

### Miscellaneous Tasks
- Revert "Direct implementation of fix vectors ([#3147](https://github.com/YimMenu/YimMenu/issues/3147))" ([#3179](https://github.com/YimMenu/YimMenu/issues/3179)) ([0393c5d](https://github.com/YimMenu/YimMenu/commit/0393c5d3917dbc0db084b241841fd0eaaa5e1d2c))
- This reverts commit fb07065aaf3d0777d4cacef3e211d3b3cd6a09db. ([0393c5d](https://github.com/YimMenu/YimMenu/commit/0393c5d3917dbc0db084b241841fd0eaaa5e1d2c))
- Session multiplexer and more ([#3167](https://github.com/YimMenu/YimMenu/issues/3167)) ([c180694](https://github.com/YimMenu/YimMenu/commit/c1806941993e3a9fe3f3a3671fc2974c296ab927))
- Remove Unknown Player OOM Kick False Positives ([#3170](https://github.com/YimMenu/YimMenu/issues/3170)) ([860a466](https://github.com/YimMenu/YimMenu/commit/860a466f826f5ec7450cdcd7a168edc48a927469))
- Move session lock logic to handle_join_request ([#3136](https://github.com/YimMenu/YimMenu/issues/3136)) ([a568dea](https://github.com/YimMenu/YimMenu/commit/a568dea653db20b7e9704753aa75f7081f9d45f5))
- Improve nightly release ([#3171](https://github.com/YimMenu/YimMenu/issues/3171)) ([a9eaaeb](https://github.com/YimMenu/YimMenu/commit/a9eaaebb42eab516262ac513db1ef44dcdc0dbcf))


## 2024-05-18

### Bug Fixes
- Fake ban message ([#3141](https://github.com/YimMenu/YimMenu/issues/3141)) ([64d1874](https://github.com/YimMenu/YimMenu/commit/64d187413fe6abf770d2fa769b869fae2b8b440e))


### Miscellaneous Tasks
- Added filtering system to prepare_metric_for_sending. ([#3139](https://github.com/YimMenu/YimMenu/issues/3139)) ([254f64f](https://github.com/YimMenu/YimMenu/commit/254f64f1afa64588b47e553df3e1ca6a3e40c97a))
- Direct implementation of fix vectors ([#3147](https://github.com/YimMenu/YimMenu/issues/3147)) ([fb07065](https://github.com/YimMenu/YimMenu/commit/fb07065aaf3d0777d4cacef3e211d3b3cd6a09db))
- Protection improvements ([#3146](https://github.com/YimMenu/YimMenu/issues/3146)) ([28aae52](https://github.com/YimMenu/YimMenu/commit/28aae52e72ffe8f4e514279b06b628b710a1597c))
- Refactored DISABLE_CONTROL_ACTION to use unordered_set. ([#3157](https://github.com/YimMenu/YimMenu/issues/3157)) ([54c7dad](https://github.com/YimMenu/YimMenu/commit/54c7dada828384b96c4bffd3a0d8fd87c98a017d))
- Refactored DISABLE_CONTROL_ACTION to use unordered_set. ([54c7dad](https://github.com/YimMenu/YimMenu/commit/54c7dada828384b96c4bffd3a0d8fd87c98a017d))
- Refactored SCALEFORM_MOVIE_METHOD_ADD_PARAM_INT hook to reuse the arg0 parameter if format_money was on, but the user had less than 1000 casino chips. ([54c7dad](https://github.com/YimMenu/YimMenu/commit/54c7dada828384b96c4bffd3a0d8fd87c98a017d))


## 2024-05-15

### Miscellaneous Tasks
- Change MIPH with MPH ([#3128](https://github.com/YimMenu/YimMenu/issues/3128)) ([7f8977a](https://github.com/YimMenu/YimMenu/commit/7f8977adcf28da3ff60710249664cd4935452b4a))
- Small Refactor of Session Bad Sport Spoofing ([#3134](https://github.com/YimMenu/YimMenu/issues/3134)) ([059f831](https://github.com/YimMenu/YimMenu/commit/059f831c52ebe814881bc0aa7d7488c05e914134))
- Stability Improvements to Black Hole Feature ([#3132](https://github.com/YimMenu/YimMenu/issues/3132)) ([00f5c34](https://github.com/YimMenu/YimMenu/commit/00f5c34e2a1e2f60fabbfa9163c5b53c86696239))


## 2024-05-15

### Miscellaneous Tasks
- Elegant crash complete protection ([#3109](https://github.com/YimMenu/YimMenu/issues/3109)) ([b693509](https://github.com/YimMenu/YimMenu/commit/b6935096091f50264501c12029ec885ff0862a96))
- Added file-based log to debug.packet_logs. ([#3127](https://github.com/YimMenu/YimMenu/issues/3127)) ([73120c6](https://github.com/YimMenu/YimMenu/commit/73120c6b94b729136457d6512c0edb35fb5eefb5))
- Cleaned up log_node function. ([#3130](https://github.com/YimMenu/YimMenu/issues/3130)) ([a25476d](https://github.com/YimMenu/YimMenu/commit/a25476d918f9a778ecf5aa7b39392580bb970e62))


## 2024-05-11

### Bug Fixes
- Crash in transition ([#3091](https://github.com/YimMenu/YimMenu/issues/3091)) ([f81d408](https://github.com/YimMenu/YimMenu/commit/f81d40854d94ceffb8592eb72058786173633755))


### Miscellaneous Tasks
- Remove redundant nullptr checks in player::get_ped(). ([#3095](https://github.com/YimMenu/YimMenu/issues/3095)) ([773f57b](https://github.com/YimMenu/YimMenu/commit/773f57baccd4574f66d7e2b9f8ed061e91de2349))
- Remove `this` keyword ([773f57b](https://github.com/YimMenu/YimMenu/commit/773f57baccd4574f66d7e2b9f8ed061e91de2349))


## 2024-05-10

### Features
- Chat translator ([#2931](https://github.com/YimMenu/YimMenu/issues/2931)) ([f15cb31](https://github.com/YimMenu/YimMenu/commit/f15cb312e78e17cbbcb2e11fef59fe2527f7855b))


### Miscellaneous Tasks
- IPL Fix & Formatting ([#3082](https://github.com/YimMenu/YimMenu/issues/3082)) ([3a7cad7](https://github.com/YimMenu/YimMenu/commit/3a7cad7f72b6286707b1cbbc69d44ed77be29250))
- Less noticeable multi-kick => smart-kick ([#3066](https://github.com/YimMenu/YimMenu/issues/3066)) ([dada469](https://github.com/YimMenu/YimMenu/commit/dada469c55535642a2ac29288d642d10373a93d6))
- Desync kick protection ([#3086](https://github.com/YimMenu/YimMenu/issues/3086)) ([86c63df](https://github.com/YimMenu/YimMenu/commit/86c63dfff5dab97339ef13d29e3ff89a956644b4))


([#3073](https://github.com/YimMenu/YimMenu/issues/3073)) ([29f226b](https://github.com/YimMenu/YimMenu/commit/29f226b316a03ad2a933192b035d9a7a31c5e894))
- Hotfix ([#3072](https://github.com/YimMenu/YimMenu/issues/3072)) ([01f784d](https://github.com/YimMenu/YimMenu/commit/01f784de1879c24e1ac53784caaa2a21c191eb69))
- Fix the Radio Sync Fix ([#3060](https://github.com/YimMenu/YimMenu/issues/3060)) ([d65f7f2](https://github.com/YimMenu/YimMenu/commit/d65f7f2745c97983e35a74bbdada3f773f7d39a4))
- Add .pdb file to ci workflow ([#3069](https://github.com/YimMenu/YimMenu/issues/3069)) ([5065b44](https://github.com/YimMenu/YimMenu/commit/5065b449cc820869483c6a623ca5322c04e80519))
- Crash Fixes (?) ([#3081](https://github.com/YimMenu/YimMenu/issues/3081)) ([3d77d92](https://github.com/YimMenu/YimMenu/commit/3d77d92db2a7ab5841a21f608e0588b9871c783c))
- Fix player list crash ([#3080](https://github.com/YimMenu/YimMenu/issues/3080)) ([9062491](https://github.com/YimMenu/YimMenu/commit/9062491f1d00a46b0d739aea2e313b7cce1431eb))
- Fixed get_rockstar_id returning an incorrect type. ([9062491](https://github.com/YimMenu/YimMenu/commit/9062491f1d00a46b0d739aea2e313b7cce1431eb))
- Added more OOP usage of get_rockstar_id when applicable. ([9062491](https://github.com/YimMenu/YimMenu/commit/9062491f1d00a46b0d739aea2e313b7cce1431eb))


### Refactor
- Remove trailing whitespace ([5065b44](https://github.com/YimMenu/YimMenu/commit/5065b449cc820869483c6a623ca5322c04e80519))


## 2024-05-08

### Miscellaneous Tasks
- Refactor of Player Wanted Level ([#3070](https://github.com/YimMenu/YimMenu/issues/3070)) ([1b82c94](https://github.com/YimMenu/YimMenu/commit/1b82c94d4dc4c0f754511c4c219d12e974422897))
- Sanity checks for get_net_data. ([#3068](https://github.com/YimMenu/YimMenu/issues/3068)) ([b7d75d4](https://github.com/YimMenu/YimMenu/commit/b7d75d4fcd3f3275002483667b6362c9e687d726))


## 2024-05-06

### Miscellaneous Tasks
- Allow Trusted Players & Friends to Request Control ([#3047](https://github.com/YimMenu/YimMenu/issues/3047)) ([d75bebd](https://github.com/YimMenu/YimMenu/commit/d75bebd3862a961924585487249e079f00567324))
- PlayerDB Delete Untrusted Players ([#3053](https://github.com/YimMenu/YimMenu/issues/3053)) ([f4449ba](https://github.com/YimMenu/YimMenu/commit/f4449bad9969c142b165776e06c5a758f3e8225b))
- Start Script Activity Session Check ([#3045](https://github.com/YimMenu/YimMenu/issues/3045)) ([1066aef](https://github.com/YimMenu/YimMenu/commit/1066aefa03a9222122330f1f0295f7d5324a05ab))
- Remove useless kicks ([#3061](https://github.com/YimMenu/YimMenu/issues/3061)) ([dfca5c7](https://github.com/YimMenu/YimMenu/commit/dfca5c7567d4c5cd1d5f971823182c5cacc85a05))
- Remove Start LS Customs Button from LS Customs Menu ([#3065](https://github.com/YimMenu/YimMenu/issues/3065)) ([499fc6b](https://github.com/YimMenu/YimMenu/commit/499fc6b9069730ad25576c38492bfb77f5db9422))


## 2024-05-03

### Bug Fixes
- Not closing when the selected player left ([#3039](https://github.com/YimMenu/YimMenu/issues/3039)) ([d957658](https://github.com/YimMenu/YimMenu/commit/d9576584f5750a69495e60ba002ea2c7cba9ddf4))


### Miscellaneous Tasks
- Fix multiple crashes. ([#3035](https://github.com/YimMenu/YimMenu/issues/3035)) ([e18efc6](https://github.com/YimMenu/YimMenu/commit/e18efc618013eb6d9475c4de153500481b43aee9))
- Add more translation keys ([#3024](https://github.com/YimMenu/YimMenu/issues/3024)) ([a7934ba](https://github.com/YimMenu/YimMenu/commit/a7934ba357689f0d305f9f554e1d84a3a124a379))


## 2024-05-01

### Bug Fixes
- Fix repair not working after going in water ([#2996](https://github.com/YimMenu/YimMenu/issues/2996)) ([435963d](https://github.com/YimMenu/YimMenu/commit/435963d3b6542442648f1e0faf94fd2ec41c21cf))


### Miscellaneous Tasks
- Updated the max characters from 64 characters to 41, which seems to be the maximum the Socialclub API actually saves and returns. ([#3014](https://github.com/YimMenu/YimMenu/issues/3014)) ([7a25403](https://github.com/YimMenu/YimMenu/commit/7a2540391291b4c35154fcc8ff25ba4df5df5a3b))
- Fixed vehicle extras to match the scripts ([#3019](https://github.com/YimMenu/YimMenu/issues/3019)) ([3470660](https://github.com/YimMenu/YimMenu/commit/3470660b8d9f6981cb71cb7fcd02b2e727218725))
- Refactor format money to use manual methods of comma addition. ([#3020](https://github.com/YimMenu/YimMenu/issues/3020)) ([d13b49c](https://github.com/YimMenu/YimMenu/commit/d13b49ca0b7ee3f290de8ab073a158251fa456bd))


## 2024-04-30

### Bug Fixes
- Missing translations ([#3004](https://github.com/YimMenu/YimMenu/issues/3004)) ([5fec32d](https://github.com/YimMenu/YimMenu/commit/5fec32df4c5b7bc648cb2170d96d79e637a91a3e))


### Features
- Added Infinite Vehicle Ammo ([#3003](https://github.com/YimMenu/YimMenu/issues/3003)) ([03b65d5](https://github.com/YimMenu/YimMenu/commit/03b65d53752fc8c0cead2679102f88b1cdf63bcb))


### Miscellaneous Tasks
- Chinese chat spam blacklist ([#2994](https://github.com/YimMenu/YimMenu/issues/2994)) ([f0cd838](https://github.com/YimMenu/YimMenu/commit/f0cd838bb1fe382b1ecd8ffdcc305a089b78fd75))
- Added "Enable MK1 and MK2 Weapons" feature. ([#3000](https://github.com/YimMenu/YimMenu/issues/3000)) ([ccb3591](https://github.com/YimMenu/YimMenu/commit/ccb359136499c751536aebfc566dd593de538805))
- Bypass Profanity Checks ([#3010](https://github.com/YimMenu/YimMenu/issues/3010)) ([222e988](https://github.com/YimMenu/YimMenu/commit/222e98840c1cddcc009fa7202f1585b637bbde14))
- Increased the maximum length of CEO Name from 15 to 64 characters. ([#3011](https://github.com/YimMenu/YimMenu/issues/3011)) ([17a7ad6](https://github.com/YimMenu/YimMenu/commit/17a7ad65b939a269c4307041ca110bfaae13b210))
- Added FMMC_KEY_TIP15 replacement of 15 to 64. ([17a7ad6](https://github.com/YimMenu/YimMenu/commit/17a7ad65b939a269c4307041ca110bfaae13b210))
- Removed legacy multiplayer chat filter. ([17a7ad6](https://github.com/YimMenu/YimMenu/commit/17a7ad65b939a269c4307041ca110bfaae13b210))
- Add motorcycle club, too. ([#3013](https://github.com/YimMenu/YimMenu/issues/3013)) ([d1d72e5](https://github.com/YimMenu/YimMenu/commit/d1d72e54b99c18b36d72cee1cc1623f0f40c3cb1))
- Refactor add_callback_for_labels to take an initializer_list. ([d1d72e5](https://github.com/YimMenu/YimMenu/commit/d1d72e54b99c18b36d72cee1cc1623f0f40c3cb1))


## 2024-04-28

### Bug Fixes
- Prevent autokick of friends and trusted ([#2989](https://github.com/YimMenu/YimMenu/issues/2989)) ([ff55db8](https://github.com/YimMenu/YimMenu/commit/ff55db8fa3ae1721dbcd166ed2c26407844e325e))


### Features
- Added UI element to toggle give collectible ([#2990](https://github.com/YimMenu/YimMenu/issues/2990)) ([fcf74bc](https://github.com/YimMenu/YimMenu/commit/fcf74bc19895526636dcb20088723478b8deb9dc))


### Miscellaneous Tasks
- Added UI element to toggle give collectible ([#2990](https://github.com/YimMenu/YimMenu/issues/2990)) ([fcf74bc](https://github.com/YimMenu/YimMenu/commit/fcf74bc19895526636dcb20088723478b8deb9dc))


## 2024-04-22

### Features
- Add compiler hints ([ca1e7e6](https://github.com/YimMenu/YimMenu/commit/ca1e7e6b419d68bfa6673da0e38b9e52721aa4aa))
- Add compiler hint to crashes ([ca1e7e6](https://github.com/YimMenu/YimMenu/commit/ca1e7e6b419d68bfa6673da0e38b9e52721aa4aa))
- Add likely compiler hint to on_present ([ca1e7e6](https://github.com/YimMenu/YimMenu/commit/ca1e7e6b419d68bfa6673da0e38b9e52721aa4aa))
- Add compiler hints ([ca1e7e6](https://github.com/YimMenu/YimMenu/commit/ca1e7e6b419d68bfa6673da0e38b9e52721aa4aa))


### Miscellaneous Tasks
- Added formatting to money on HUD. ([#2957](https://github.com/YimMenu/YimMenu/issues/2957)) ([b1bf477](https://github.com/YimMenu/YimMenu/commit/b1bf477d1fb046e663d931b7b5b86b933ef938ef))
- Give optimisation hints to compiler ([#2929](https://github.com/YimMenu/YimMenu/issues/2929)) ([ca1e7e6](https://github.com/YimMenu/YimMenu/commit/ca1e7e6b419d68bfa6673da0e38b9e52721aa4aa))
- Added translation TODO ([ca1e7e6](https://github.com/YimMenu/YimMenu/commit/ca1e7e6b419d68bfa6673da0e38b9e52721aa4aa))
- Added hook likely/unlikely switches to debug/crash scenarios. ([ca1e7e6](https://github.com/YimMenu/YimMenu/commit/ca1e7e6b419d68bfa6673da0e38b9e52721aa4aa))
- Added HEX_TO_UPPER call on the AC verifier offsets. ([ca1e7e6](https://github.com/YimMenu/YimMenu/commit/ca1e7e6b419d68bfa6673da0e38b9e52721aa4aa))
- Added more fuzzer unlikely attributes. ([ca1e7e6](https://github.com/YimMenu/YimMenu/commit/ca1e7e6b419d68bfa6673da0e38b9e52721aa4aa))
- Replaced some hard coded numbers with their unhashed _J variants. ([ca1e7e6](https://github.com/YimMenu/YimMenu/commit/ca1e7e6b419d68bfa6673da0e38b9e52721aa4aa))
- Added more unlikely attributes to singleton initializer checks. ([ca1e7e6](https://github.com/YimMenu/YimMenu/commit/ca1e7e6b419d68bfa6673da0e38b9e52721aa4aa))
- Added more likely/unlikely attributes to certain scenarios. ([ca1e7e6](https://github.com/YimMenu/YimMenu/commit/ca1e7e6b419d68bfa6673da0e38b9e52721aa4aa))


## 2024-04-17

### Features
- Bump build number ([#2949](https://github.com/YimMenu/YimMenu/issues/2949)) ([3a84f91](https://github.com/YimMenu/YimMenu/commit/3a84f91fd8f3b102140d8f1b07065e0d640617d9))


### Miscellaneous Tasks
- Fix for GTA Build 3179 ([#2946](https://github.com/YimMenu/YimMenu/issues/2946)) ([382ddb3](https://github.com/YimMenu/YimMenu/commit/382ddb319b988ea64e13b89a945aeb3f96aff546))
- Removed old and unused security pointer/signature ([382ddb3](https://github.com/YimMenu/YimMenu/commit/382ddb319b988ea64e13b89a945aeb3f96aff546))
- Updated GTAV-Classes ([382ddb3](https://github.com/YimMenu/YimMenu/commit/382ddb319b988ea64e13b89a945aeb3f96aff546))


## 2024-04-04

### Features
- Expand Turkish glyph range ([#2915](https://github.com/YimMenu/YimMenu/issues/2915)) ([075f30f](https://github.com/YimMenu/YimMenu/commit/075f30fc7b676e0c5a740da4bc6b844e544ba4e4))


### Miscellaneous Tasks
- Fixed vehicles in preview exploding. ([#2908](https://github.com/YimMenu/YimMenu/issues/2908)) ([5703338](https://github.com/YimMenu/YimMenu/commit/5703338d67475ec755c88443b3faa6578b6df6d5))
- Closes #2905 ([5703338](https://github.com/YimMenu/YimMenu/commit/5703338d67475ec755c88443b3faa6578b6df6d5))
- Fixed set_mp_bitset being called from vehicle::spawned if the is_networked parameter was false. ([5703338](https://github.com/YimMenu/YimMenu/commit/5703338d67475ec755c88443b3faa6578b6df6d5))


## 2024-03-31

### Bug Fixes
- Fix chat not seen by other players ([#2900](https://github.com/YimMenu/YimMenu/issues/2900)) ([4e1deb4](https://github.com/YimMenu/YimMenu/commit/4e1deb4ef09f6b65b6e3bc42c423fe3e28ac23cf))


### Miscellaneous Tasks
- Refactor m_rockstar_id into its proper type of a 64-bit signed integer. ([#2901](https://github.com/YimMenu/YimMenu/issues/2901)) ([8425cae](https://github.com/YimMenu/YimMenu/commit/8425cae0f662f9504135468a7269dac8ce0762ec))


## 2024-03-30

### Bug Fixes
- Fix nlohmann potential throw in ped outfit ([#2894](https://github.com/YimMenu/YimMenu/issues/2894)) ([629cff2](ht