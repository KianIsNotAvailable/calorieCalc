-- Update exercise categories for the provided exercises
-- Legs
UPDATE Exercises
SET exercise_category = 'Legs'
WHERE exercise_name IN ('Squats', 'Lunges', 'Deadlifts', 'Leg Press', 'Calf Raises');

-- Chest (Push)
UPDATE Exercises
SET exercise_category = 'Push'
WHERE exercise_name IN ('Push-Ups', 'Bench Press', 'Dumbbell Flyes', 'Incline Bench Press', 'Chest Dips');

-- Biceps (Pull)
UPDATE Exercises
SET exercise_category = 'Pull'
WHERE exercise_name IN ('Barbell Bicep Curls', 'Dumbbell Hammer Curls', 'Concentration Curls', 'EZ-Bar Preacher Curls', 'Reverse Curls');

-- Triceps (Push)
UPDATE Exercises
SET exercise_category = 'Push'
WHERE exercise_name IN ('Tricep Dips', 'Tricep Pushdowns', 'Skull Crushers', 'Overhead Tricep Extensions', 'Close-Grip Bench Press');

-- Shoulders (Push)
UPDATE Exercises
SET exercise_category = 'Push'
WHERE exercise_name IN ('Military Press (Overhead Press)', 'Lateral Raises', 'Front Raises', 'Shrugs', 'Bent Over Lateral Raises');

-- Abs
UPDATE Exercises
SET exercise_category = 'Abs'
WHERE exercise_name IN ('Crunches', 'Planks', 'Russian Twists', 'Leg Raises', 'Bicycle Crunches');

