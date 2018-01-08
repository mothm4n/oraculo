# Oraculo 
System of GameMasters to support his games adding more elements of randomness to play.

## User stories

1. **Setup the First Scene**
The idea of the setup is to config the game in that moment with the actual situation of the characters & the different elements of the scene (PC,NPC,Threads for now). Optionaly you can start with a simple question to start to construct from that situation. As you build more detailed system here you can create a much better feedback from the system at start.
    * **Only make question option (like 3.)**
        With this initial action we start the flow directly with a default Chaos (5 usually in stantard) and choosing the Odds.

    * **Introduce Player Characters**
        Introduce the Character names of the players of that campaign. For now will be only the Name.
    * **Skip the introduce of Player characters**
        You can Skipthe step of introducing player characters.
    * **Introduce Starting Threads**
        Introduce the name and description of the Threads of the players
    * **Introduce Starting NPC's**
        Introduce the important NPC's that are in the Threads of the players. 
    * **Initial Chaos Status**
        The default initial chaos its 5 but you can change it to be more or less chaotic 
    * **Introduce Inicial description of scene (Optional)**
        Introduce the description of the first initial scene

2. **Random Event**
    Take the information of the actual scene and returns a proposal of possible event with relation of NPC/PC/Threads. For example
    "There is a event of 'Move toward a thread' related to 'Main quest'" or There is a event of 'Remote event' related to NPC 'Jhon Doe' with the thread 'Side quest 21'. 
    The idea is focus that event on something, and if is needed we show NPC, PC &/or Threads. (its a list of different focus)

    * **Add the interpretation of the event.**
    From the situation that the system offers we make a interpretation with the information that we have making a final version. 
    * **Add new NPC (optional)**
    Related to this event we can add a new NPC. 

    * **Add new Thread (optional)**
    Related to this event we can add a new Thread. 

    * **Possible Focus table**
    1. Remote event (subject + related)
        1. NPC related
        2. PC related
        3. Nothing
    2. Action (subject + related)
        1. NPC action
        2. PC NPC action
        3. Nothing
    4. New NPC
    5. Move toward a...
        1. Thread
        2. PC thread
    6. Move Away a...
        1. Thread
        2. PC thread
    7. Close...
        1. PC thread
        2. Thread
    8. Negative event (subject + related)
        1. PC related
        2. NPC related
        3. PC NPC related
        4. Nothing
    9. Positive event (subject + related)
        1. PC related
        2. NPC related
        3. PC NPC related
        4. Nothing
    9. Ambiguous event (subject + related)
        1. PC related
        2. NPC related
        3. PC NPC related
        4. Nothing

3. **Make a question**
    When we make a question we define different elements related to that question.
    * **Make the question**
    We write the question that we need the answer. 
    * **Choose Odds**
    We choos the Odd that we thing have that question to answer, its our thinking of the result of that question.
        * **List of Odds** 
        1. Impossible
        2. No way
        3. Very unlikely
        4. Unlikely
        5. 50/50
        6. Somewhat likely
        7. Likely
        8. Very likely
        9. Near sure thing
        10. A sure thing
        11. Has to be

    * **Response List**
        1. Yes
        2. No
        3. Strong Yes
        4. Strong No
        5. Exceptional Yes 
        6. Exceptional No
        7. Overwhelming Yes
        8. Overwhelming No
    * **Event**
    Depending of the chaos factor there is a posibility to have a "Modificator" adding a simple event to that response.
    * **Add the interpretation of the response**
    We add the interpretation of the response to the log
    * **Set the Chaos**
    After the response we can modify the chaos factor of the game.

4. **Roll a dice**

5. **Evaluate Actual Scene**
    * **OUTPUT:** 
    1. How it goes the scene, if there is some alteration or not.
    2. If there is an alteration what event ocurrs.
6. **Finish the scene**
7. **Log of events**
8. **List of Player Characters**
9. **Add a Player Character**
10. **Delete a Player Character**
11. **List of NPCs**
12. **Add a new NPC**
13. **Delete a NPC**
14. **List of Threads**
15. **Add a new Thread**
16. **Resolve a Thread**
17. **Reset**
18. **End Scene**


## Tables 

### Subjects of event
1. Goals
2. Dreams
3. Environment
4. Outside
5. Inside
6. Reality
7. Allies
8. Enemies
9. Evil
10. Good
11. Emotions
12. Opposition
13. War
14. Peace
15. The innocent
16. Love
17. The spiritual
18. The intellectual
19. New ideas
20. Joy
21. Messages
22. Energy
23. Balance
24. Tension
25. Friendship
26. The physical
27. A project
28. Pleasures
29. Pain
30. Possessions
31. Benefits
32. Plans
33. Lies
34. Expectations
35. Legal matters
36. Bureaucracy
37. Business
38. A path
39. News
40. Exterior factors
41. Advice
42. A plot
43. Competition
44. Prison
45. Illness
46. Food
47. Attention
48. Success
49. Failure
50. Travel
51. Jealousy
52. Dispute
53. Home
54. Investment
55. Suffering
56. Wishes
57. Tactics
58. Stalemate
59. Randomness
60. Misfortune
61. Death
62. Disruption
63. Power
64. A burden
65. Intrigues
66. Fears
67. Ambush
68. Rumor
69. Wounds
70. Extravagance
71. A representative
72. Adversities
73. Opulence
74. Liberty
75. Military
76. The mundane
77. Trials
78. Masses
79. Vehicle
80. Art
81. Victory
82. Dispute
83. Riches
84. Status quo
85. Technology
86. Hope
87. Magic
88. Illusions
89. Portals
90. Danger
91. Weapons
92. Animals
93. Weather
94. Elements
95. Nature
96. The public
97. Leadership
98. Fame
99. Anger
100. Information

### Actions of events
1. Attainment
2. Starting
3. Neglect
4. Fight
5. Recruit
6. Triumph
7. Violate
8. Oppose
9. Malice
10. Communicate
11. Persecute
12. Increase
13. Decrease
14. Abandon
15. Gratify
16. Inquire
17. Antagonise
18. Move
19. Waste
20. Truce
21. Release
22. Befriend
23. Judge
24. Desert
25. Dominate
26. Procrastinate
27. Praise
28. Separate
29. Take
30. Break
31. Heal
32. Delay
33. Stop
34. Lie
35. Return
36. Immitate
37. Struggle
38. Inform
39. Bestow
40. Postpone
41. Expose
42. Haggle
43. Imprison
44. Release
45. Celebrate
46. Develop
47. Travel
48. Block
49. Harm
50. Debase
51. Overindulge
52. Adjourn
53. Adversity
54. Kill
55. Disrupt
56. Usurp
57. Create
58. Betray
59. Agree
60. Abuse
61. Oppress
62. Inspect
63. Ambush
64. Spy
65. Attach
66. Carry
67. Open
68. Carelessness
69. Ruin
70. Extravagance
71. Trick
72. Arrive
73. Propose
74. Divide
75. Refuse
76. Mistrust
77. Deceive
78. Cruelty
79. Intolerance
80. Trust
81. Excitement
82. Activity
83. Assist
84. Care
85. Negligence
86. Passion
87. Work hard
88. Control
89. Attract
90. Failure
91. Pursue
92. Vengeance
93. Proceedings
94. Dispute
95. Punish
96. Guide
97. Transform
98. Overthrow
99. Oppress
100. Change
