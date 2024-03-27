# Changelog

All notable changes to this project will be documented in this file.

## [nightly] - 2024-03-27

### Miscellaneous Tasks
- ACTUALLY fixes #2675 this time I swear. ([#2879](https://github.com/YimMenu/YimMenu/issues/2879)) ([6212171](https://github.com/YimMenu/YimMenu/commit/6212171fc809d358ed008f4e09966217693339f4))


- Closes #2880 ([0fb17b6](https://github.com/YimMenu/YimMenu/commit/0fb17b668ef96e5acbeaa6a076c30fb3b67432c8))


### Refactor
- Model Preview use time delta instead of frame/tick rate ([#2881](https://github.com/YimMenu/YimMenu/issues/2881)) ([0fb17b6](https://github.com/YimMenu/YimMenu/commit/0fb17b668ef96e5acbeaa6a076c30fb3b67432c8))


## 2024-03-26

### Miscellaneous Tasks
- Fixed send chat logic ([#2874](https://github.com/YimMenu/YimMenu/issues/2874)) ([a5a5b07](https://github.com/YimMenu/YimMenu/commit/a5a5b07984911eeb278a72683024dd4825e03533))

- Command reports will now only be sent to the command user ([a5a5b07](https://github.com/YimMenu/YimMenu/commit/a5a5b07984911eeb278a72683024dd4825e03533))

- Closes #2875 ([399a5d3](https://github.com/YimMenu/YimMenu/commit/399a5d3dec8adf830e1cac7b2306d1b2f1f411f8))
- Closes #2675 ([399a5d3](https://github.com/YimMenu/YimMenu/commit/399a5d3dec8adf830e1cac7b2306d1b2f1f411f8))
- Closes #2077 ([399a5d3](https://github.com/YimMenu/YimMenu/commit/399a5d3dec8adf830e1cac7b2306d1b2f1f411f8))


### Refactor
- Bad design around the preview service ([#2877](https://github.com/YimMenu/YimMenu/issues/2877)) ([399a5d3](https://github.com/YimMenu/YimMenu/commit/399a5d3dec8adf830e1cac7b2306d1b2f1f411f8))


## 2024-03-22

### Bug Fixes
- Fixes ([7e7bcb1](https://github.com/YimMenu/YimMenu/commit/7e7bcb155a5594a6e5955894cc2b8f05d063b31c))
- Fix team chat ([7e7bcb1](https://github.com/YimMenu/YimMenu/commit/7e7bcb155a5594a6e5955894cc2b8f05d063b31c))


### Features
- Refactor and fix send chat ([7e7bcb1](https://github.com/YimMenu/YimMenu/commit/7e7bcb155a5594a6e5955894cc2b8f05d063b31c))


### Miscellaneous Tasks

- The main goal was improving the readability of the original code however some ugliness remains. ([cba19d0](https://github.com/YimMenu/YimMenu/commit/cba19d0c331ab584c12f198a30509c656af53564))

- - Swapped from pointer singleton to instance singleton ([cba19d0](https://github.com/YimMenu/YimMenu/commit/cba19d0c331ab584c12f198a30509c656af53564))
- - Actually make use of the alpha logic that used to be present ([cba19d0](https://github.com/YimMenu/YimMenu/commit/cba19d0c331ab584c12f198a30509c656af53564))
- - Added a counter to notifications to indicate if something is being spammed ([cba19d0](https://github.com/YimMenu/YimMenu/commit/cba19d0c331ab584c12f198a30509c656af53564))
- - Notification timeouts reset if they're sent to the queue again ([cba19d0](https://github.com/YimMenu/YimMenu/commit/cba19d0c331ab584c12f198a30509c656af53564))
- Refactor and fix send chat ([#2864](https://github.com/YimMenu/YimMenu/issues/2864)) ([7e7bcb1](https://github.com/YimMenu/YimMenu/commit/7e7bcb155a5594a6e5955894cc2b8f05d063b31c))




### Refactor
- Rewrite of the old notification service ([#2866](https://github.com/YimMenu/YimMenu/issues/2866)) ([cba19d0](https://github.com/YimMenu/YimMenu/commit/cba19d0c331ab584c12f198a30509c656af53564))


## 2024-03-22

### Miscellaneous Tasks
- Fixed incorrect typing of crash_objects array to allow the compiler to determine which is best. ([#2859](https://github.com/YimMenu/YimMenu/issues/2859)) ([3f1921e](https://github.com/YimMenu/YimMenu/commit/3f1921e83583b2a46c56c3502f6fb06ba84c8ba0))

- Remove DROWN flag and replace it with WATER flag. ([#2863](https://github.com/YimMenu/YimMenu/issues/2863)) ([313bfa2](https://github.com/YimMenu/YimMenu/commit/313bfa24b3cf019d6583181eea3f9af6b2207a93))



## 2024-03-21

### Bug Fixes
- Not logging anymore after setup is done ([#2858](https://github.com/YimMenu/YimMenu/issues/2858)) ([5f553b3](https://github.com/YimMenu/YimMenu/commit/5f553b343000f75c53594a0213da3f85e1cad19b))


### Miscellaneous Tasks
- Add lua api: script.execute_as_script ([#2824](https://github.com/YimMenu/YimMenu/issues/2824)) ([95259fa](https://github.com/YimMenu/YimMenu/commit/95259faf593150dc5d5b929a457b4b0ae91f778e))


- Regression introduced in #2492 ([5f553b3](https://github.com/YimMenu/YimMenu/commit/5f553b343000f75c53594a0213da3f85e1cad19b))
- Closes #2773 ([5f553b3](https://github.com/YimMenu/YimMenu/commit/5f553b343000f75c53594a0213da3f85e1cad19b))
- Add more crash models to protection ([#2857](https://github.com/YimMenu/YimMenu/issues/2857)) ([dd67901](https://github.com/YimMenu/YimMenu/commit/dd679010b759b8e43d076e236ab2a9ce00f4ddae))



## 2024-03-19

### Miscellaneous Tasks
- Fixed hooks::scripted_game_event using incorrect types and sizes. ([#2844](https://github.com/YimMenu/YimMenu/issues/2844)) ([de5ff92](https://github.com/YimMenu/YimMenu/commit/de5ff92fa071d615e7abdb350419b69783220022))

- Extra give control checks ([#2847](https://github.com/YimMenu/YimMenu/issues/2847)) ([ae27173](https://github.com/YimMenu/YimMenu/commit/ae27173b1239f31b13f0fe94226539e459524549))

- Closes #2841 ([ae27173](https://github.com/YimMenu/YimMenu/commit/ae27173b1239f31b13f0fe94226539e459524549))
- Closes #2088 ([ae27173](https://github.com/YimMenu/YimMenu/commit/ae27173b1239f31b13f0fe94226539e459524549))
- Fixed bounty button & added bounty to all ([#2846](https://github.com/YimMenu/YimMenu/issues/2846)) ([b5d8d7d](https://github.com/YimMenu/YimMenu/commit/b5d8d7dbadaca4da168d696ba82c9cdb69d652a1))

- Added separate ID for Set button & Added bounty for all ([b5d8d7d](https://github.com/YimMenu/YimMenu/commit/b5d8d7dbadaca4da168d696ba82c9cdb69d652a1))

- Reverted unrelated changes ([b5d8d7d](https://github.com/YimMenu/YimMenu/commit/b5d8d7dbadaca4da168d696ba82c9cdb69d652a1))

- CPlayerExtendedGameStateNode should be updated on classes repo though ([b5d8d7d](https://github.com/YimMenu/YimMenu/commit/b5d8d7dbadaca4da168d696ba82c9cdb69d652a1))


## 2024-03-12

### Features
- Crash on non-MSVC compilers ([#2819](https://github.com/YimMenu/YimMenu/issues/2819)) ([10fc7a5](https://github.com/YimMenu/YimMenu/commit/10fc7a5e13ea19208d36c7af1d0bd5dfb26ad037))


### Miscellaneous Tasks


- Why? Shorter to write and removes the macro usage ([e076013](https://github.com/YimMenu/YimMenu/commit/e07601347d9578ede0f21d069ad1b177d6cfa2d2))

- I used the following regex to find all occurrences: ([e076013](https://github.com/YimMenu/YimMenu/commit/e07601347d9578ede0f21d069ad1b177d6cfa2d2))
- ```r ([e076013](https://github.com/YimMenu/YimMenu/commit/e07601347d9578ede0f21d069ad1b177d6cfa2d2))
- RAGE_JOAAT\("(.*?)"\) ([e076013](https://github.com/YimMenu/YimMenu/commit/e07601347d9578ede0f21d069ad1b177d6cfa2d2))
- ``` ([e076013](https://github.com/YimMenu/YimMenu/commit/e07601347d9578ede0f21d069ad1b177d6cfa2d2))
- Then the following to replace it all: ([e076013](https://github.com/YimMenu/YimMenu/commit/e07601347d9578ede0f21d069ad1b177d6cfa2d2))
- ```r ([e076013](https://github.com/YimMenu/YimMenu/commit/e07601347d9578ede0f21d069ad1b177d6cfa2d2))
- "$1"_J ([e076013](https://github.com/YimMenu/YimMenu/commit/e07601347d9578ede0f21d069ad1b177d6cfa2d2))
- ``` ([e076013](https://github.com/YimMenu/YimMenu/commit/e07601347d9578ede0f21d069ad1b177d6cfa2d2))
- Nightly but better ([#2818](https://github.com/YimMenu/YimMenu/issues/2818)) ([8d0ce1d](https://github.com/YimMenu/YimMenu/commit/8d0ce1d306ff3b581552319adb15be11a57476f9))



### Refactor
- Switch RAGE_JOAAT with string literal functions ([#2806](https://github.com/YimMenu/YimMenu/issues/2806)) ([e076013](https://github.com/YimMenu/YimMenu/commit/e07601347d9578ede0f21d069ad1b177d6cfa2d2))


## 2024-03-11

### Miscellaneous Tasks
- Simplified zhcn Character List and Add new Traditional Chinese characters for https://github.com/YimMenu/Translations/pull/121 ([#2807](https://github.com/YimMenu/YimMenu/issues/2807)) ([d520080](https://github.com/YimMenu/YimMenu/commit/d52008068e7db2c36be948ffbe1d085075f6c479))

- Added Turkish font support. ([#2817](https://github.com/YimMenu/YimMenu/issues/2817)) ([a10f7ef](https://github.com/YimMenu/YimMenu/commit/a10f7ef53e891c5ddb8e7b2641c5b2e161bb71c0))

- Added Turkish font support. ([a10f7ef](https://github.com/YimMenu/YimMenu/commit/a10f7ef53e891c5ddb8e7b2641c5b2e161bb71c0))

- Fixed Turkish case not including Latin characters. ([a10f7ef](https://github.com/YimMenu/YimMenu/commit/a10f7ef53e891c5ddb8e7b2641c5b2e161bb71c0))


## 2024-02-23

### Bug Fixes
- Ped body clean up logic ([#2764](https://github.com/YimMenu/YimMenu/issues/2764)) ([c629dd1](https://github.com/YimMenu/YimMenu/commit/c629dd1e09eb8f3a17ece8162ff260815dd3d859))


### Features
- Add menu onboarding to YimMenu ([#2492](https://github.com/YimMenu/YimMenu/issues/2492)) ([d4d504d](https://github.com/YimMenu/YimMenu/commit/d4d504dca2c3f4b456ff7ce7a71fdea422d0ad40))



## 2024-02-24

### Miscellaneous Tasks
- Lua io.exists ([#2771](https://github.com/YimMenu/YimMenu/issues/2771)) ([5306177](https://github.com/YimMenu/YimMenu/commit/530617755ee2f432e7f9e25428bb1a8edada7a27))

- Display of the vehicle list for Traditional Chinese users ([#2772](https://github.com/YimMenu/YimMenu/issues/2772)) ([9855e46](https://github.com/YimMenu/YimMenu/commit/9855e46dd164df6c00d5f6b212ef5084e68c7785))



## 2024-02-21

### Documentation
- Add README to `cmake/` folder ([#2750](https://github.com/YimMenu/YimMenu/issues/2750)) ([c794437](https://github.com/YimMenu/YimMenu/commit/c7944373dd67af6a84b0283b6bc106caf905cfce))


### Features
- Only trigger on changes that matter ([#2752](https://github.com/YimMenu/YimMenu/issues/2752)) ([a6a77a0](https://github.com/YimMenu/YimMenu/commit/a6a77a0f6baf1c1376b25af09ded9dda894b6490))
- Only trigger on changes that matter ([a6a77a0](https://github.com/YimMenu/YimMenu/commit/a6a77a0f6baf1c1376b25af09ded9dda894b6490))
- Include ci.yml to path trigger ([a6a77a0](https://github.com/YimMenu/YimMenu/commit/a6a77a0f6baf1c1376b25af09ded9dda894b6490))
- Cancel action if a new commit comes in ([a6a77a0](https://github.com/YimMenu/YimMenu/commit/a6a77a0f6baf1c1376b25af09ded9dda894b6490))
- Cancel last nightly if a new request comes in ([a6a77a0](https://github.com/YimMenu/YimMenu/commit/a6a77a0f6baf1c1376b25af09ded9dda894b6490))


### Miscellaneous Tasks

- I noticed certain people did not understand the purpose of this folder, hopefully this will clarify certain things and explain why we have certain dependencies. ([c794437](https://github.com/YimMenu/YimMenu/commit/c7944373dd67af6a84b0283b6bc106caf905cfce))




- Implemented GetGlyphRangesChineseSimplifiedOfficial ([#2756](https://github.com/YimMenu/YimMenu/issues/2756)) ([f74c576](https://github.com/YimMenu/YimMenu/commit/f74c576fdb6c009d49c99638ba3364abf5e7206a))



## 2024-02-21

### Bug Fixes
- Regression in world spawn bypass introduced in #2669 ([0b53660](https://github.com/YimMenu/YimMenu/commit/0b53660312d1b752910aa9cf0e4a5e5e29f406c2))
- Session join options not updating after language change ([0b53660](https://github.com/YimMenu/YimMenu/commit/0b53660312d1b752910aa9cf0e4a5e5e29f406c2))
- Prevent game from crashing by filling up the bullet pool ([0b53660](https://github.com/YimMenu/YimMenu/commit/0b53660312d1b752910aa9cf0e4a5e5e29f406c2))
- Render weapon names properly ([0b53660](https://github.com/YimMenu/YimMenu/commit/0b53660312d1b752910aa9cf0e4a5e5e29f406c2))
- Names don't appear in chat ([0b53660](https://github.com/YimMenu/YimMenu/commit/0b53660312d1b752910aa9cf0e4a5e5e29f406c2))


### Features
- Added dynamic font loading based on lang requirements ([#2738](https://github.com/YimMenu/YimMenu/issues/2738)) ([183b0ee](https://github.com/YimMenu/YimMenu/commit/183b0eee44ab6f3a3d12a214c63c98608b0e91ac))


### Miscellaneous Tasks
- Proper fix for weapon info damage crash ([#2740](https://github.com/YimMenu/YimMenu/issues/2740)) ([683d6bc](https://github.com/YimMenu/YimMenu/commit/683d6bce071edf5644867068f5815dbd77fe6225))

- Allow functions to be called without giving all of its args  ([#2744](https://github.com/YimMenu/YimMenu/issues/2744)) ([2d55470](https://github.com/YimMenu/YimMenu/commit/2d55470e1017cfff4d27a581e005965d21440585))

- This makes usage of native functions that normally use pointer args easier to deal with. ([2d55470](https://github.com/YimMenu/YimMenu/commit/2d55470e1017cfff4d27a581e005965d21440585))
- Fix enabling/disabling ([#2745](https://github.com/YimMenu/YimMenu/issues/2745)) ([cde5563](https://github.com/YimMenu/YimMenu/commit/cde5563204469446e75a714cac5c0dc12af9dc2e))


- Related YimMenu/Translations#117 ([183b0ee](https://github.com/YimMenu/YimMenu/commit/183b0eee44ab6f3a3d12a214c63c98608b0e91ac))
- Closes #2723 ([183b0ee](https://github.com/YimMenu/YimMenu/commit/183b0eee44ab6f3a3d12a214c63c98608b0e91ac))

- Changes made: ([183b0ee](https://github.com/YimMenu/YimMenu/commit/183b0eee44ab6f3a3d12a214c63c98608b0e91ac))
-  - Renderer class was changed to a static instance ([183b0ee](https://github.com/YimMenu/YimMenu/commit/183b0eee44ab6f3a3d12a214c63c98608b0e91ac))
-  - Some throw code was removed because of change of instantiation of the renderer ([183b0ee](https://github.com/YimMenu/YimMenu/commit/183b0eee44ab6f3a3d12a214c63c98608b0e91ac))
-  - Fonts are dynamically loaded based on the language requirements ([183b0ee](https://github.com/YimMenu/YimMenu/commit/183b0eee44ab6f3a3d12a214c63c98608b0e91ac))
-  - renderer files have been moved to make the root directory less messy ([183b0ee](https://github.com/YimMenu/YimMenu/commit/183b0eee44ab6f3a3d12a214c63c98608b0e91ac))
-  - Added a font mgr to improve the ease of adding more language support ([183b0ee](https://github.com/YimMenu/YimMenu/commit/183b0eee44ab6f3a3d12a214c63c98608b0e91ac))
- Many different fixes ([#2749](https://github.com/YimMenu/YimMenu/issues/2749)) ([0b53660](https://github.com/YimMenu/YimMenu/commit/0b53660312d1b752910aa9cf0e4a5e5e29f406c2))



### Refactor
- Don't save certain settings that users usually don't want to have enabled ([0b53660](https://github.com/YimMenu/YimMenu/commit/0b53660312d1b752910aa9cf0e4a5e5e29f406c2))


## 2024-02-20

### Miscellaneous Tasks
- Fixed Social Club Presence Data. ([#2729](https://github.com/YimMenu/YimMenu/issues/2729)) ([d737c01](https://github.com/YimMenu/YimMenu/commit/d737c01b333f349ff9d4803784fee1051ee93cb9))

- RECEIVED_CLONE_REMOVE player ped removal protection ([#2732](https://github.com/YimMenu/YimMenu/issues/2732)) ([3a8aed2](https://github.com/YimMenu/YimMenu/commit/3a8aed2d009ff98f705ddff2934ffade6edd9a0a))

- AMMO_BALL protection ([#2733](https://github.com/YimMenu/YimMenu/issues/2733)) ([9e6559b](https://github.com/YimMenu/YimMenu/commit/9e6559b3042386944c8a41c68f525b5a9a1604cc))

- Added new language options to issues ([#2736](https://github.com/YimMenu/YimMenu/issues/2736)) ([6d95b3e](https://github.com/YimMenu/YimMenu/commit/6d95b3e0b864357e332a1f39c8aa6c3aed6ec34c))



## 2024-02-12

### Bug Fixes
- Fixed bool_masked ([#2708](https://github.com/YimMenu/YimMenu/issues/2708)) ([ec7735c](https://github.com/YimMenu/YimMenu/commit/ec7735cb3a0e7fedb2fcf89112323fdff0dfe22d))


### Miscellaneous Tasks
- Potential fix for WMSB ([#2707](https://github.com/YimMenu/YimMenu/issues/2707)) ([1a0fbd3](https://github.com/YimMenu/YimMenu/commit/1a0fbd3dea827f7c69d8fe03b35d9929f3fd6460))




## 2024-02-10

### Miscellaneous Tasks
- Launcher script start fix ([#2697](https://github.com/YimMenu/YimMenu/issues/2697)) ([0afcb00](https://github.com/YimMenu/YimMenu/commit/0afcb00ec79c83c1de031f1e25c013586b2c56e6))

- Fixed Fonts. ([#2698](https://github.com/YimMenu/YimMenu/issues/2698)) ([0275821](https://github.com/YimMenu/YimMenu/commit/0275821f951782551ff44bc34838e485c3f8722b))

- Added Windows Build Info to log. ([0275821](https://github.com/YimMenu/YimMenu/commit/0275821f951782551ff44bc34838e485c3f8722b))
- Fixed memory leak caused by not releasing the memory from GetWindowsVersion. ([#2699](https://github.com/YimMenu/YimMenu/issues/2699)) ([c87aea7](https://github.com/YimMenu/YimMenu/commit/c87aea7f3cd581915ba0a1b3cddb9ab4fc9ef0a4))



## 2024-02-09

### Bug Fixes
- Don't randomize components if we're cloning an existing ped ([240ca76](https://github.com/YimMenu/YimMenu/commit/240ca76e3b97eac01772111ab30591fb9fb0590a))
- Add a mission check ([240ca76](https://github.com/YimMenu/YimMenu/commit/240ca76e3b97eac01772111ab30591fb9fb0590a))


### Features
- Add traffic manipulation protection ([240ca76](https://github.com/YimMenu/YimMenu/commit/240ca76e3b97eac01772111ab30591fb9fb0590a))
- Print if debug build ([#2695](https://github.com/YimMenu/YimMenu/issues/2695)) ([b1ad42e](https://github.com/YimMenu/YimMenu/commit/b1ad42e3f9390b788f27a30a53da24efb0fd8f09))


### Miscellaneous Tasks
- Block traffic protection ([#2688](https://github.com/YimMenu/YimMenu/issues/2688)) ([240ca76](https://github.com/YimMenu/YimMenu/commit/240ca76e3b97eac01772111ab30591fb9fb0590a))




## 2024-01-28

### Bug Fixes
- Don't randomize components if we're cloning an existing ped ([#2663](https://github.com/YimMenu/YimMenu/issues/2663)) ([1e11d83](https://github.com/YimMenu/YimMenu/commit/1e11d83f7a67a9275ca64fd404f0e05759893553))


### Features
- Expose the self class and add new menu events ([#2656](https://github.com/YimMenu/YimMenu/issues/2656)) ([96048fa](https://github.com/YimMenu/YimMenu/commit/96048fa0f6318547e72562ce820e2960d1e98dd7))
- Feat(enums) Added new license plates from 1.68 ([#2665](https://github.com/YimMenu/YimMenu/issues/2665)) ([7efbee2](https://github.com/YimMenu/YimMenu/commit/7efbee2e85ba2aee773e398cd9e66d54e640aca5))


### Miscellaneous Tasks

- Graceful Landing ([#2660](https://github.com/YimMenu/YimMenu/issues/2660)) ([ee707c5](https://github.com/YimMenu/YimMenu/commit/ee707c538b6061a248c02f29c4809c28ac465201))






### Refactor
- Switch from DragFloats to SliderFloats ([#2662](https://github.com/YimMenu/YimMenu/issues/2662)) ([aea35d9](https://github.com/YimMenu/YimMenu/commit/aea35d9cf1efad4309c615dfc1ef2c3808fc604f))


## 2024-01-27

### Miscellaneous Tasks
- Optimized Aimbot code. ([#2653](https://github.com/YimMenu/YimMenu/issues/2653)) ([deac08e](https://github.com/YimMenu/YimMenu/commit/deac08e856ce25d3d58c4baf0ac30a1111381f02))

- Fixed hypot call not considering the Z coordinates. ([deac08e](https://github.com/YimMenu/YimMenu/commit/deac08e856ce25d3d58c4baf0ac30a1111381f02))
- Refactored class-based variables. ([deac08e](https://github.com/YimMenu/YimMenu/commit/deac08e856ce25d3d58c4baf0ac30a1111381f02))
- Fixed on_player/on_enemy/on_police/on_npc config variables not being persisted to disk. ([deac08e](https://github.com/YimMenu/YimMenu/commit/deac08e856ce25d3d58c4baf0ac30a1111381f02))



### Refactor
- Improvement load_3d_ground_at_coords ([#2654](https://github.com/YimMenu/YimMenu/issues/2654)) ([3c59b34](https://github.com/YimMenu/YimMenu/commit/3c59b3408f75b93d52a2e4e8e4e86f6f14477ebe))


## 2023-12-21

### Features
- Update ImGui to latest release ([#2621](https://github.com/YimMenu/YimMenu/issues/2621)) ([5324d0a](https://github.com/YimMenu/YimMenu/commit/5324d0a244bfa6094e71867d5fe758fc0fb4597b))


### Miscellaneous Tasks
- Fix debug build ([#2625](https://github.com/YimMenu/YimMenu/issues/2625)) ([3237f6a](https://github.com/YimMenu/YimMenu/commit/3237f6ade484671e74d2cd473bfd33f66443916c))


- Weapon events refactor. ([#2622](https://github.com/YimMenu/YimMenu/issues/2622)) ([4312d9d](https://github.com/YimMenu/YimMenu/commit/4312d9d15cbb51b24e8ac9b35b81cca51b9ab673))

- Removed legacy REMOVE_ALL_WEAPONS_EVENT network event check. ([4312d9d](https://github.com/YimMenu/YimMenu/commit/4312d9d15cbb51b24e8ac9b35b81cca51b9ab673))
- Added GIVE_WEAPON_EVENT check to prevent people giving us weapons. ([4312d9d](https://github.com/YimMenu/YimMenu/commit/4312d9d15cbb51b24e8ac9b35b81cca51b9ab673))


## 2023-12-18

### Bug Fixes
- Squished drawing on mobile phone ([#2601](https://github.com/YimMenu/YimMenu/issues/2601)) ([8e8919e](https://github.com/YimMenu/YimMenu/commit/8e8919ec564bba01e22c81e3c90bd0f33bc30888))


### Miscellaneous Tasks
- Fixed unlockveh using the player id instead of ped ([#2591](https://github.com/YimMenu/YimMenu/issues/2591)) ([e9fdc86](https://github.com/YimMenu/YimMenu/commit/e9fdc86239530ef01a1c1e03c9945e4396f9e8e6))

- Fixed unlockveh command using the Player ID for the arguments instead of the Player Ped. ([e9fdc86](https://github.com/YimMenu/YimMenu/commit/e9fdc86239530ef01a1c1e03c9945e4396f9e8e6))

- Fixed lock/unlock vehicle door calls to use the eVehicleLockState enum. ([e9fdc86](https://github.com/YimMenu/YimMenu/commit/e9fdc86239530ef01a1c1e03c9945e4396f9e8e6))



## 2023-12-13

### Miscellaneous Tasks
- Added Oppressor Mk 1's gliding ability to vehicle abilities. ([#2538](https://github.com/YimMenu/YimMenu/issues/2538)) ([ffd8915](https://github.com/YimMenu/YimMenu/commit/ffd89153b5c75f62623058cef8132bb37e7176bf))

- Fixes for b3095 ([#2537](https://github.com/YimMenu/YimMenu/issues/2537)) ([695a6dd](https://github.com/YimMenu/YimMenu/commit/695a6dd20e6c4385023b2c6a11cf80c8515197f7))

- Refactored TRIGGER_SCRIPT_EVENT for the duplicate f_2 argument they added in 3095. ([695a6dd](https://github.com/YimMenu/YimMenu/commit/695a6dd20e6c4385023b2c6a11cf80c8515197f7))
- Fixed OOB gadget spam caused by the tow truck. ([695a6dd](https://github.com/YimMenu/YimMenu/commit/695a6dd20e6c4385023b2c6a11cf80c8515197f7))
- Increased max interiors in InteriorControl. ([695a6dd](https://github.com/YimMenu/YimMenu/commit/695a6dd20e6c4385023b2c6a11cf80c8515197f7))
- Updated scripted_game_event. ([695a6dd](https://github.com/YimMenu/YimMenu/commit/695a6dd20e6c4385023b2c6a11cf80c8515197f7))
- Update GTAV-Classes repo. ([695a6dd](https://github.com/YimMenu/YimMenu/commit/695a6dd20e6c4385023b2c6a11cf80c8515197f7))
- Fixed locals for 3095. ([695a6dd](https://github.com/YimMenu/YimMenu/commit/695a6dd20e6c4385023b2c6a11cf80c8515197f7))
- Bump project to Build 3095. ([695a6dd](https://github.com/YimMenu/YimMenu/commit/695a6dd20e6c4385023b2c6a11cf80c8515197f7))
- Fixed LS Customs camera being stuck on certain vehicles. ([#2539](https://github.com/YimMenu/YimMenu/issues/2539)) ([f0aa601](https://github.com/YimMenu/YimMenu/commit/f0aa601c18a4d5c503aa7033127136aeedc43aa3))

- Fixed incorrect pointer type for PBOOL on line 92. ([#2545](https://github.com/YimMenu/YimMenu/issues/2545)) ([7f20e01](https://github.com/YimMenu/YimMenu/commit/7f20e0193881552143fccfed9dc38174044da157))

- Added new Scrapyard DLC vehicles to GetVehicleInfoForClanLogo. ([#2547](https://github.com/YimMenu/YimMenu/issues/2547)) ([f6a1acd](https://github.com/YimMenu/YimMenu/commit/f6a1acdc4c1d3e08297363804802a73dc283796f))

- Fixed RAP signature. ([#2548](https://github.com/YimMenu/YimMenu/issues/2548)) ([a7215d2](https://github.com/YimMenu/YimMenu/commit/a7215d2c4107bbdf66e6b3f3b1337756c54cdf38))



