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
    1. Remote event
        1. NPC related
        2. PC related
    2. Action
        1. NPC action
        2. PC NPC action
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
    8. Negative event
        1. PC related
        2. NPC related
        3. PC NPC related
    9. Positive event
        1. PC related
        2. NPC related
        3. PC NPC related
    9. Ambiguous event
        1. PC related
        2. NPC related
        3. PC NPC related

3. **Make a question**
    * **Choose Odds**
    * **Set the Chaos**
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
