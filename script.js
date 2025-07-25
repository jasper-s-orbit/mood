// Fallback for crypto.randomUUID() for older browsers (though widely supported now)
        function generateUUID() {
            if (typeof crypto !== 'undefined' && crypto.randomUUID) {
                return crypto.randomUUID();
            }
            // Fallback for older browsers
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        // --- Quiz Questions Data ---
        const allQuestions = [
            // Design Thinking (approx. 33 questions)
            { question: "Which phase of Design Thinking involves understanding the users' needs and challenges?", options: ["Ideate", "Prototype", "Empathize", "Test"], correctAnswer: 2, topic: "Design Thinking" },
            { question: "What is the primary goal of the 'Define' phase in Design Thinking?", options: ["To brainstorm solutions", "To build a physical model", "To clearly articulate the problem statement", "To gather user feedback"], correctAnswer: 2, topic: "Design Thinking" },
            { question: "Brainstorming is a key activity in which Design Thinking phase?", options: ["Empathize", "Define", "Ideate", "Test"], correctAnswer: 2, topic: "Design Thinking" },
            { question: "What does 'iterative' mean in the context of Design Thinking?", options: ["The process is linear and sequential", "It involves repeating cycles of improvement", "It focuses on a single perfect solution", "It's only for digital products"], correctAnswer: 1, topic: "Design Thinking" },
            { question: "A 'Persona' is a tool used in Design Thinking to:", options: ["Track project timelines", "Represent a typical user", "Analyze market trends", "Manage financial budgets"], correctAnswer: 1, topic: "Design Thinking" },
            { question: "What is a 'User Journey Map' used for in Design Thinking?", options: ["Mapping out a product's technical architecture", "Visualizing a user's experience over time", "Creating a sales funnel", "Documenting legal requirements"], correctAnswer: 1, topic: "Design Thinking" },
            { question: "Which of the following is NOT a core principle of Design Thinking?", options: ["User-centered", "Iterative", "Problem-focused", "Profit-first"], correctAnswer: 3, topic: "Design Thinking" },
            { question: "The 'Test' phase in Design Thinking primarily involves:", options: ["Launching the final product", "Gathering feedback on prototypes", "Developing marketing strategies", "Calculating production costs"], correctAnswer: 1, topic: "Design Thinking" },
            { question: "What is an 'Empathy Map' used for?", options: ["To map out a company's organizational structure", "To understand a user's thoughts, feelings, and actions", "To create a financial forecast", "To track customer complaints"], correctAnswer: 1, topic: "Design Thinking" },
            { question: "Design Thinking is often described as a 'human-centered' approach because:", options: ["It focuses on human resources", "It prioritizes the needs and experiences of users", "It involves only human designers", "It is only applicable to human-robot interaction"], correctAnswer: 1, topic: "Design Thinking" },
            { question: "What is a 'Wicked Problem' in Design Thinking?", options: ["A simple problem with an obvious solution", "A complex problem with no clear solution or definition", "A problem caused by malicious software", "A problem that only affects a small group of people"], correctAnswer: 1, topic: "Design Thinking" },
            { question: "The 'How Might We' (HMW) questions are typically formulated in which phase?", options: ["Empathize", "Define", "Ideate", "Test"], correctAnswer: 1, topic: "Design Thinking" },
            { question: "What is the purpose of 'Divergent Thinking' in Design Thinking?", options: ["To narrow down ideas to the best one", "To generate as many ideas as possible", "To analyze data critically", "To implement a solution quickly"], correctAnswer: 1, topic: "Design Thinking" },
            { question: "What is 'Convergent Thinking' used for?", options: ["To explore many possibilities", "To select and refine the best ideas", "To understand user emotions", "To create a visual prototype"], correctAnswer: 1, topic: "Design Thinking" },
            { question: "A 'Problem Statement' in Design Thinking should be:", options: ["Vague and open-ended", "Specific, actionable, and user-centered", "Focused on technical specifications", "Only for internal team use"], correctAnswer: 1, topic: "Design Thinking" },
            { question: "Which tool helps visualize the sequence of user actions and emotions?", options: ["SWOT Analysis", "Business Model Canvas", "User Flow Diagram", "Gantt Chart"], correctAnswer: 2, topic: "Design Thinking" },
            { question: "The primary output of the 'Prototype' phase is:", options: ["A fully functional product", "A low-fidelity representation for testing", "A marketing plan", "A financial report"], correctAnswer: 1, topic: "Design Thinking" },
            { question: "Why is feedback crucial in the Design Thinking process?", options: ["It's not, it slows down the process", "It helps validate assumptions and refine solutions", "It's only for aesthetic improvements", "It's a regulatory requirement"], correctAnswer: 1, topic: "Design Thinking" },
            { question: "What does 'POV' stand for in Design Thinking?", options: ["Point of View", "Product Operating Vision", "Process Optimization Value", "Project Outcome Verification"], correctAnswer: 0, topic: "Design Thinking" },
            { question: "Which of these is a common method for gathering insights in the Empathize phase?", options: ["Surveys", "Interviews", "A/B Testing", "Market Segmentation"], correctAnswer: 1, topic: "Design Thinking" },
            { question: "What is the main benefit of applying Design Thinking?", options: ["Guaranteed profit", "Faster product launch", "Better understanding of user needs and effective solutions", "Reduced development costs"], correctAnswer: 2, topic: "Design Thinking" },
            { question: "Which of the following is an example of a low-fidelity prototype?", options: ["A fully coded web application", "A detailed 3D printed model", "Sketches on paper", "A production-ready product"], correctAnswer: 2, topic: "Design Thinking" },
            { question: "The 'Double Diamond' model is often used to illustrate which process?", options: ["Software Development Life Cycle", "Design Thinking Process", "Supply Chain Management", "Financial Planning"], correctAnswer: 1, topic: "Design Thinking" },
            { question: "What is the role of 'Constraints' in Design Thinking?", options: ["They limit creativity and should be avoided", "They provide boundaries and focus for problem-solving", "They are only relevant in the testing phase", "They are always financial limitations"], correctAnswer: 1, topic: "Design Thinking" },
            { question: "Which of these is a characteristic of a successful Design Thinking team?", options: ["Homogeneous skills", "Strict hierarchy", "Multidisciplinary collaboration", "Individual work only"], correctAnswer: 2, topic: "Design Thinking" },
            { question: "What is the purpose of 'Affinity Diagramming'?", options: ["To organize and synthesize qualitative data", "To create a Gantt chart", "To track project expenses", "To design user interfaces"], correctAnswer: 0, topic: "Design Thinking" },
            { question: "The 'Define' phase transforms observations into:", options: ["Solutions", "Prototypes", "Problem statements", "Test plans"], correctAnswer: 2, topic: "Design Thinking" },
            { question: "What is a 'Minimum Viable Product' (MVP) in the context of Design Thinking?", options: ["A fully featured product ready for market", "A product with just enough features to satisfy early adopters and provide feedback", "A product that is not yet ready for testing", "A product with no user interface"], correctAnswer: 1, topic: "Design Thinking" },
            { question: "Which of the following best describes the outcome of the 'Ideate' phase?", options: ["A single, perfect solution", "A wide range of potential solutions", "A detailed technical specification", "A validated business model"], correctAnswer: 1, topic: "Design Thinking" },
            { question: "What is the primary benefit of early prototyping?", options: ["To finalize the product design immediately", "To get early feedback and iterate quickly", "To reduce the need for user testing", "To increase production costs"], correctAnswer: 1, topic: "Design Thinking" },
            { question: "Design Thinking emphasizes understanding users' needs and motivations, which is known as:", options: ["Market analysis", "User empathy", "Competitive benchmarking", "Financial forecasting"], correctAnswer: 1, topic: "Design Thinking" },
            { question: "Which of these is a common pitfall in Design Thinking?", options: ["Too much user research", "Skipping the 'Define' phase", "Over-prototyping", "Embracing failure as a learning opportunity"], correctAnswer: 1, topic: "Design Thinking" },
            { question: "What is the role of 'Storyboarding' in Design Thinking?", options: ["To create a financial projection", "To visualize a user's interaction with a product or service over time", "To write code for a new feature", "To manage project risks"], correctAnswer: 1, topic: "Design Thinking" },

            // Innovation Thinking (approx. 33 questions)
            { question: "What is the main difference between 'incremental' and 'radical' innovation?", options: ["Incremental is always better", "Radical is about small improvements, incremental is about breakthroughs", "Incremental is about small improvements, radical is about breakthroughs", "There is no difference"], correctAnswer: 2, topic: "Innovation Thinking" },
            { question: "Which concept refers to creating new market space, making the competition irrelevant?", options: ["Red Ocean Strategy", "Blue Ocean Strategy", "Green Ocean Strategy", "Black Ocean Strategy"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "What does 'MVP' stand for in the context of innovation?", options: ["Most Valuable Player", "Minimum Viable Product", "Maximum Value Proposition", "Main Vision Project"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "What is 'Disruptive Innovation'?", options: ["Innovation that improves existing products incrementally", "Innovation that creates a new market and value network, eventually displacing established market-leading firms", "Innovation that focuses on cost reduction", "Innovation that is easily copied by competitors"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "The 'Lean Startup' methodology emphasizes:", options: ["Extensive upfront planning", "Building, measuring, and learning in rapid cycles", "Avoiding user feedback", "Focusing on large-scale production immediately"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "What is 'Open Innovation'?", options: ["Innovation that occurs only within a single company", "Innovation that involves external ideas and collaboration", "Innovation that is kept secret", "Innovation that is not protected by patents"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "A 'Value Proposition' describes:", options: ["The price of a product", "The benefits a company promises to deliver to customers", "The internal cost structure of a business", "The marketing budget"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "What is the purpose of 'Competitive Advantage'?", options: ["To be the only company in the market", "To outperform rivals by offering greater value", "To always have the lowest price", "To avoid all competition"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "Which of these is a common barrier to innovation within organizations?", options: ["Risk aversion", "Abundant resources", "Strong leadership", "Open communication"], correctAnswer: 0, topic: "Innovation Thinking" },
            { question: "What is 'Ideation' in the context of innovation?", options: ["The process of implementing ideas", "The process of generating, developing, and communicating new ideas", "The process of evaluating existing products", "The process of market research only"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "What is the role of 'Creativity' in innovation?", options: ["It is irrelevant to innovation", "It is essential for generating novel ideas and solutions", "It only applies to artistic fields", "It is only for individual contributors"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "Which of the following is a characteristic of an 'Innovative Culture'?", options: ["Strict adherence to tradition", "Fear of failure", "Experimentation and learning from mistakes", "Top-down decision making only"], correctAnswer: 2, topic: "Innovation Thinking" },
            { question: "What is 'Market Research' used for in innovation?", options: ["To confirm existing biases", "To understand customer needs, market trends, and competitive landscape", "To set product prices arbitrarily", "To design product packaging"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "What is 'Trend Analysis'?", options: ["Ignoring current market shifts", "Studying past and present data to predict future directions", "Copying competitor's products", "Focusing only on internal company data"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "A 'Business Model Canvas' is a tool used to:", options: ["Design product interfaces", "Visualize and assess a business model", "Manage project timelines", "Create marketing campaigns"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "What is the primary goal of 'Brainstorming' sessions in innovation?", options: ["To criticize ideas", "To generate a large quantity of diverse ideas", "To make final decisions", "To assign tasks"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "What is 'Intellectual Property' (IP) in innovation?", options: ["Physical assets of a company", "Creations of the mind, such as inventions, literary and artistic works, designs, and symbols", "Financial investments", "Marketing slogans"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "What is 'Design Sprint'?", options: ["A long-term project management methodology", "A five-day process for answering critical business questions through design, prototyping, and testing new ideas", "A type of athletic competition", "A software development framework"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "Which of these is a key aspect of 'Frugal Innovation'?", options: ["High cost, complex solutions", "Innovation for affluent markets", "Creating more value with fewer resources", "Ignoring environmental impact"], correctAnswer: 2, topic: "Innovation Thinking" },
            { question: "What is the role of 'Failure' in innovation?", options: ["It means the process is broken and should be stopped", "It is an opportunity for learning and iteration", "It should be avoided at all costs", "It indicates a lack of effort"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "What is 'Lateral Thinking'?", options: ["Thinking in a linear, logical sequence", "Solving problems through an indirect and creative approach", "Thinking only about horizontal markets", "Focusing on short-term gains"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "Which type of innovation focuses on improving existing products or processes?", options: ["Radical innovation", "Disruptive innovation", "Incremental innovation", "Architectural innovation"], correctAnswer: 2, topic: "Innovation Thinking" },
            { question: "What is a 'Patent'?", options: ["A marketing document", "A legal right granted for an invention, allowing the patent holder to exclude others from making, using, or selling the invention", "A type of financial bond", "A company's mission statement"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "What is 'Crowdsourcing' in innovation?", options: ["Keeping all innovation internal", "Obtaining ideas, services, or content by soliciting contributions from a large group of people, especially from the online community", "A form of traditional market research", "A method for reducing staff numbers"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "The concept of 'First Mover Advantage' refers to:", options: ["The benefit of being the last to enter a market", "The benefit gained by being the first to market with a new product or service", "The advantage of having the most capital", "The advantage of having the largest team"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "What is 'Open Source Innovation'?", options: ["Innovation developed in secrecy", "Innovation where the source code or design is publicly available and can be modified and distributed", "Innovation that requires a license fee", "Innovation that is only for large corporations"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "Which of these is a characteristic of a 'Growth Mindset' in innovation?", options: ["Belief that abilities are fixed", "Embracing challenges and learning from criticism", "Avoiding new experiences", "Focusing on immediate success"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "What is 'Design-Driven Innovation'?", options: ["Innovation focused solely on aesthetics", "Innovation that emerges from a deep understanding of user needs and meanings, leading to new product meanings", "Innovation that is driven by engineering specifications", "Innovation that ignores user feedback"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "What is the primary aim of 'Experimentation' in innovation?", options: ["To avoid making mistakes", "To validate hypotheses and learn quickly", "To prove a concept without testing", "To reduce development time by skipping steps"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "Which of the following best describes 'Ambidextrous Organization' in innovation?", options: ["An organization that can only focus on one type of innovation", "An organization that can both exploit existing capabilities and explore new opportunities", "An organization with a flat hierarchy", "An organization that avoids risk"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "What is 'Reverse Innovation'?", options: ["Innovation developed in rich countries and then adapted for poorer ones", "Innovation developed in emerging markets and then adopted in richer ones", "Innovation that goes against market trends", "Innovation that focuses on outdated technologies"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "What is a 'Skunkworks' project in innovation?", options: ["A highly bureaucratic project", "A small, autonomous team working on innovative projects outside normal company procedures", "A project focused on environmental issues", "A project with unlimited budget"], correctAnswer: 1, topic: "Innovation Thinking" },
            { question: "Which of these is a key element of 'Innovation Ecosystems'?", options: ["Isolation and secrecy", "Collaboration among diverse stakeholders (companies, universities, government)", "Strict competition without cooperation", "Centralized control by a single entity"], correctAnswer: 1, topic: "Innovation Thinking" },

            // Modelling and Prototyping (approx. 34 questions)
            { question: "What is a 'Wireframe' primarily used for?", options: ["Defining visual aesthetics", "Outlining the basic structure and layout of a user interface", "Testing product performance", "Calculating production costs"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "A 'Mockup' is a static visual representation of a product that focuses on:", options: ["Functionality and interaction", "Visual design, layout, and content", "Technical specifications", "User feedback analysis"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "What is the main purpose of 'Low-Fidelity Prototyping'?", options: ["To create a pixel-perfect design", "To quickly test concepts and gather early feedback", "To produce a final product", "To simulate complex systems"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "Which type of prototype is closest to the final product in terms of appearance and functionality?", options: ["Low-fidelity prototype", "Paper prototype", "High-fidelity prototype", "Conceptual prototype"], correctAnswer: 2, topic: "Modelling and Prototyping" },
            { question: "What is 'Rapid Prototyping'?", options: ["A slow and detailed prototyping process", "A method for quickly creating physical models or digital simulations", "A process only for large-scale manufacturing", "A technique for market analysis"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "What is '3D Printing' used for in prototyping?", options: ["Mass production of consumer goods", "Creating physical models from digital designs", "Software development", "Financial modeling"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "What is 'Simulation' in the context of product realization?", options: ["Building a physical model", "Creating a virtual representation to test behavior and performance", "A marketing strategy", "A method for user interviews"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "What is 'A/B Testing' primarily used for?", options: ["To compare two versions of a product or feature to see which performs better", "To test the durability of a product", "To calculate the cost of production", "To gather qualitative user feedback"], correctAnswer: 0, topic: "Modelling and Prototyping" },
            { question: "What are 'Feedback Loops' in iterative development?", options: ["A one-way communication channel", "Processes where output is returned as input to adjust and improve a system", "A type of electrical circuit", "A method for ignoring user input"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "A 'Functional Prototype' focuses on:", options: ["The visual aesthetics of the product", "Demonstrating the core features and functionality", "The marketing strategy", "The packaging design"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "What is a 'Visual Prototype'?", options: ["A prototype that only focuses on the internal mechanics", "A prototype that emphasizes the look and feel of the product", "A prototype used for performance testing", "A prototype that is fully functional"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "What is a 'Technical Prototype'?", options: ["A prototype used for user experience testing", "A prototype built to test specific technical challenges or components", "A prototype that is ready for mass production", "A prototype that only focuses on visual design"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "What is a 'Scale Model'?", options: ["A full-size replica of a product", "A smaller or larger physical representation of an object, maintaining proportions", "A digital simulation of a product", "A financial model"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "What is a 'Digital Model'?", options: ["A physical prototype built with digital tools", "A virtual representation of a product created using software", "A marketing brochure", "A financial spreadsheet"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "Which of these is a benefit of prototyping?", options: ["Eliminates the need for user testing", "Reduces risks and costs by identifying issues early", "Guarantees market success", "Slows down the development process"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "What is 'User Testing' in the context of prototyping?", options: ["Testing the product's technical specifications", "Observing real users interacting with a prototype to gather feedback", "Testing the product's durability", "Testing the product's manufacturing process"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "The primary purpose of a 'Proof-of-Concept' (POC) is to:", options: ["Create a fully functional product", "Demonstrate the feasibility of a concept or idea", "Design the user interface", "Develop a marketing plan"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "What is 'Fidelity' in prototyping?", options: ["The cost of the prototype", "The level of detail and functionality in a prototype", "The speed of prototype creation", "The size of the prototype"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "Which tool is commonly used for creating digital wireframes and mockups?", options: ["Microsoft Word", "Figma", "Excel", "PowerPoint"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "What is the purpose of 'Usability Testing'?", options: ["To check the product's compliance with legal regulations", "To evaluate how easy and intuitive a product is to use", "To test the product's performance under extreme conditions", "To determine the product's market price"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "What is 'Iterative Development'?", options: ["A linear process with no room for changes", "A cyclical process of building, testing, and refining", "A process that avoids user feedback", "A process that only focuses on the final product"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "Which of the following is a disadvantage of high-fidelity prototypes?", options: ["They are quick and cheap to create", "They can be time-consuming and expensive to build", "They provide less realistic user feedback", "They are not suitable for user testing"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "What is a 'Storyboard' in prototyping?", options: ["A financial report", "A sequence of drawings or images depicting a user's interaction with a product or service", "A technical specification document", "A marketing campaign plan"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "What is 'Paper Prototyping'?", options: ["Creating prototypes using advanced software", "Creating simple, hand-drawn prototypes on paper", "A method for digital art creation", "A way to print 3D models"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "What is the primary goal of 'Concept Testing'?", options: ["To finalize the product's features", "To evaluate the appeal and viability of a new product idea with target users", "To test the product's durability", "To determine manufacturing costs"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "Which of these is a benefit of using digital modeling tools?", options: ["They are always cheaper than physical models", "They allow for easy modifications and sharing", "They require no technical skills", "They can only be used for visual design"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "What is 'Component Prototyping'?", options: ["Prototyping the entire product at once", "Prototyping individual parts or features of a product to test specific functionalities", "Prototyping only the visual elements", "Prototyping for mass production"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "What is 'Alpha Testing'?", options: ["Testing performed by external users in a real environment", "Testing performed by internal teams to identify bugs before wider release", "Testing the product's market viability", "Testing the product's legal compliance"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "What is 'Beta Testing'?", options: ["Testing performed by internal teams only", "Testing performed by a select group of real users in a real environment before public release", "Testing the product's manufacturing process", "Testing the product's financial model"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "Which of the following is a characteristic of a 'Good Prototype'?", options: ["It must be perfect and bug-free", "It should be just enough to answer specific questions", "It should be expensive to build", "It should only be used once"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "What is the purpose of 'Physical Models' in prototyping?", options: ["To generate digital simulations", "To provide a tangible representation for aesthetic and ergonomic evaluation", "To write code for a new product", "To conduct market research"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "What is 'Clickable Prototype'?", options: ["A static image of a product", "A digital prototype that allows users to click through screens and interact with elements, simulating the user flow", "A prototype that requires no user interaction", "A physical prototype with buttons"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "Why is 'Early and Frequent Prototyping' recommended?", options: ["To delay the product launch", "To gather continuous feedback and reduce risks", "To increase development costs", "To avoid user testing"], correctAnswer: 1, topic: "Modelling and Prototyping" },
            { question: "What is the main difference between 'Modeling' and 'Prototyping'?", options: ["Modeling is always digital, prototyping is always physical", "Modeling is about creating a representation to understand a system, prototyping is about creating an early version of the product for testing", "There is no difference", "Modeling is only for aesthetics, prototyping is only for functionality"], correctAnswer: 1, topic: "Modelling and Prototyping" },
        ];

        let questionsToAsk = [];
        let currentQuestionIndex = 0;
        let score = 0;
        const totalQuestionsPerSession = 20;
        let userName = "Guest"; // Default name
        let currentShareId = null; // To store the ID of the shared score
        let challengedShareId = null; // ID of the score being challenged
        let challengedSharerName = null;
        let challengedSharerScore = null;

        // --- DOM Elements ---
        const startScreen = document.getElementById('start-screen');
        const userNameInput = document.getElementById('user-name-input'); // Initial name input
        const challengeIntroScreen = document.getElementById('challenge-intro-screen');
        const challengerNameDisplay = document.getElementById('challenger-name-display');
        const challengerScoreDisplay = document.getElementById('challenger-score-display');
        const challengerNameInput = document.getElementById('challenger-name-input'); // New name input for challengers
        const startChallengeButton = document.getElementById('start-challenge-button');
        const quizScreen = document.getElementById('quiz-screen');
        const scoreCard = document.getElementById('score-card');
        const startButton = document.getElementById('start-button');
        const restartButton = document.getElementById('restart-button');
        const questionText = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        const questionCountDisplay = document.getElementById('question-count');
        const progressBar = document.getElementById('progress-bar');
        const scoreText = document.getElementById('score-text');
        const scoreReview = document.getElementById('score-review');
        const scoreIconDisplay = document.getElementById('score-icon-display');
        const quizAppContainer = document.getElementById('quiz-app');
        const shareWhatsappButton = document.getElementById('share-whatsapp');
        const shareFacebookButton = document.getElementById('share-facebook');
        const sharePinterestButton = document.getElementById('share-pinterest');
        const shareTeamsButton = document.getElementById('share-teams');
        const shareSection = document.getElementById('share-section');
        const challengeOutcomeMessage = document.getElementById('challenge-outcome-message');


        // --- SVG Icons for score card ---
        const scoreIcons = {
            bronze: `<svg class="score-icon text-amber-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 11.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5zm0 11.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                    </svg>`, // Simple circle / medal outline
            silver: `<svg class="score-icon text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 9h2v2h-2zm0-4h2v3h-2zm0-4h2v3h-2z"/>
                    </svg>`, // Star
            gold: `<svg class="score-icon text-yellow-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>`, // Filled star
            trophy: `<svg class="score-icon text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 16H5V5h14v13zM7 9h10v2H7zm0 4h10v2H7z"/>
                    </svg>` // Trophy
        };

        // --- Utility Functions ---
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]]; // Swap elements
            }
        }

        function showModalMessage(message) {
            const modal = document.createElement('div');
            modal.classList.add('fixed', 'inset-0', 'bg-gray-800', 'bg-opacity-75', 'flex', 'items-center', 'justify-center', 'z-50');
            modal.innerHTML = `
                <div class="bg-white p-6 rounded-lg shadow-xl text-center max-w-sm mx-auto">
                    <p class="text-lg font-semibold mb-4">${message}</p>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onclick="this.parentNode.parentNode.remove()">OK</button>
                </div>
            `;
            document.body.appendChild(modal);
        }

        // --- Quiz Flow Functions ---
        function startGame(isChallenge = false) {
            let nameInputSource = isChallenge ? challengerNameInput : userNameInput;
            userName = nameInputSource.value.trim();

            if (!userName) {
                showModalMessage("Please enter your name to start the quiz!");
                return;
            }
            if (userName.length > 30) {
                showModalMessage("Name cannot exceed 30 characters.");
                return;
            }

            // Reset state
            currentQuestionIndex = 0;
            score = 0;
            currentShareId = null; // Clear previous share ID
            challengeOutcomeMessage.classList.add('hidden'); // Hide challenge outcome message

            shuffleArray(allQuestions); // Shuffle all questions
            questionsToAsk = allQuestions.slice(0, totalQuestionsPerSession); // Select 20 for this session

            // Hide appropriate screens, show quiz screen
            startScreen.classList.add('hidden');
            challengeIntroScreen.classList.add('hidden');
            scoreCard.classList.add('hidden');
            quizScreen.classList.remove('hidden');
            quizAppContainer.classList.add('show'); // Ensure quiz container is visible

            displayQuestion();
        }

        function displayQuestion() {
            if (currentQuestionIndex < totalQuestionsPerSession) {
                const question = questionsToAsk[currentQuestionIndex];
                const correctAnswerText = question.options[question.correctAnswer];

                const shuffledOptions = [...question.options];
                shuffleArray(shuffledOptions);

                questionText.textContent = question.question;
                optionsContainer.innerHTML = ''; // Clear previous options

                shuffledOptions.forEach((optionText) => {
                    const button = document.createElement('button');
                    button.classList.add('option-button', 'block', 'w-full', 'py-3', 'px-4', 'rounded-xl', 'text-lg', 'font-medium', 'transition-all', 'duration-200', 'ease-in-out');
                    button.textContent = optionText;
                    button.onclick = () => selectAnswer(button, correctAnswerText);
                    optionsContainer.appendChild(button);
                });

                questionCountDisplay.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestionsPerSession}`;
                updateProgressBar();

                // Fade in animation for the new question
                questionText.style.opacity = '0';
                optionsContainer.style.opacity = '0';
                setTimeout(() => {
                    questionText.style.transition = 'opacity 0.5s ease-in-out';
                    optionsContainer.style.transition = 'opacity 0.5s ease-in-out';
                    questionText.style.opacity = '1';
                    optionsContainer.style.opacity = '1';
                }, 50); // Small delay to trigger transition
            } else {
                showScoreCard();
            }
        }

        function selectAnswer(selectedButton, correctAnswerText) {
            const buttons = optionsContainer.querySelectorAll('.option-button');
            let isCorrect = false;

            buttons.forEach(button => {
                button.classList.add('disabled'); // Disable all buttons after selection
                button.onclick = null; // Remove click listener

                if (button.textContent === correctAnswerText) {
                    button.classList.add('correct');
                    if (button === selectedButton) {
                        isCorrect = true;
                    }
                } else if (button === selectedButton) {
                    button.classList.add('incorrect');
                }
            });

            if (isCorrect) {
                score++;
            }

            setTimeout(() => {
                // Fade out current question before moving to the next
                questionText.style.opacity = '0';
                optionsContainer.style.opacity = '0';
                setTimeout(() => {
                    currentQuestionIndex++;
                    displayQuestion();
                }, 500); // Wait for fade out
            }, 1500); // Wait 1.5 seconds before moving to next question
        }

        function updateProgressBar() {
            const progress = ((currentQuestionIndex + 1) / totalQuestionsPerSession) * 100;
            progressBar.style.width = `${progress}%`;
        }

        async function showScoreCard() {
            quizScreen.classList.add('hidden');
            scoreCard.classList.remove('hidden');
            scoreCard.classList.add('show'); // Trigger score card animation
            shareSection.classList.remove('hidden'); // Show share section

            scoreText.textContent = `${userName}, you scored ${score} out of ${totalQuestionsPerSession}!`;

            let reviewMessage = '';
            let iconSvg = '';

            if (score === totalQuestionsPerSession) {
                reviewMessage = "Outstanding! You're a Product Realization master!";
                iconSvg = scoreIcons.trophy;
            } else if (score >= totalQuestionsPerSession * 0.75) {
                reviewMessage = "Excellent work! You have a strong grasp of the concepts.";
                iconSvg = scoreIcons.gold;
            } else if (score >= totalQuestionsPerSession * 0.5) {
                reviewMessage = "Good effort! You're on your way to mastering Product Realization.";
                iconSvg = scoreIcons.silver;
            } else {
                reviewMessage = "Nice try! Keep learning and you'll improve. Every step is progress!";
                iconSvg = scoreIcons.bronze;
            }

            scoreReview.textContent = reviewMessage;
            scoreIconDisplay.innerHTML = iconSvg;

            // Handle challenge outcome if applicable
            if (challengedShareId && challengedSharerName && challengedSharerScore !== null) {
                shareSection.classList.add('hidden'); // Hide share section for challenged users
                challengeOutcomeMessage.classList.remove('hidden');
                let outcomeText = "";
                let didBeat = false;

                if (score > challengedSharerScore) {
                    outcomeText = `🎉 Congratulations! You beat ${challengedSharerName}'s score of ${challengedSharerScore}!`;
                    didBeat = true;
                } else if (score === challengedSharerScore) {
                    outcomeText = `🤝 You matched ${challengedSharerName}'s score of ${challengedSharerScore}! A true competitor!`;
                } else {
                    outcomeText = `Keep going! You didn't beat ${challengedSharerName}'s score of ${challengedSharerScore} this time.`;
                }
                challengeOutcomeMessage.textContent = outcomeText;

                // SIMULATED: Record the challenge attempt in localStorage
                try {
                    const sharedScores = JSON.parse(localStorage.getItem('sharedQuizScores') || '{}');
                    if (sharedScores[challengedShareId]) {
                        sharedScores[challengedShareId].challengeAttempts = sharedScores[challengedShareId].challengeAttempts || [];
                        sharedScores[challengedShareId].challengeAttempts.push({
                            challengerName: userName,
                            challengerScore: score,
                            didBeat: didBeat,
                            challengedSharerName: challengedSharerName, // Add this for clarity in simulated data
                            challengedSharerScore: challengedSharerScore, // Add this for clarity in simulated data
                            timestamp: new Date().toISOString()
                        });
                        localStorage.setItem('sharedQuizScores', JSON.stringify(sharedScores));
                        console.log("Simulated challenge attempt recorded successfully.");
                        console.log("Current localStorage shared scores:", sharedScores);
                    } else {
                        console.warn("Challenged shared score not found in localStorage for recording attempt.");
                    }
                } catch (error) {
                    console.error("Error recording simulated challenge attempt:", error);
                    showModalMessage("Error recording challenge outcome locally. Please check your browser settings.");
                }

                // Reset challenge parameters after displaying outcome
                challengedShareId = null;
                challengedSharerName = null;
                challengedSharerScore = null;

            } else {
                // If not a challenge, save the score for sharing (simulated)
                saveScoreForSharing();
            }
        }

        function saveScoreForSharing() {
            // SIMULATED: Generate a unique ID and save to localStorage
            currentShareId = generateUUID();
            const sharedScores = JSON.parse(localStorage.getItem('sharedQuizScores') || '{}');
            sharedScores[currentShareId] = {
                sharerName: userName,
                sharerScore: score,
                timestamp: new Date().toISOString(),
                challengeAttempts: [] // Initialize an empty array for challenge attempts
            };
            localStorage.setItem('sharedQuizScores', JSON.stringify(sharedScores));
            console.log("Simulated score saved for sharing with ID:", currentShareId);
        }

        function resetQuiz() {
            scoreCard.classList.remove('show');
            quizAppContainer.classList.remove('show');
            quizAppContainer.style.opacity = '0';
            quizAppContainer.style.transform = 'translateY(20px)';
            userNameInput.value = ""; // Clear name input for initial screen
            challengerNameInput.value = ""; // Clear name input for challenge screen
            startScreen.classList.remove('hidden');
            challengeOutcomeMessage.classList.add('hidden'); // Hide challenge outcome message
            setTimeout(() => {
                quizAppContainer.classList.add('show'); // Re-show the start screen with animation
            }, 100);
        }

        // --- Share Functions ---
        function getShareUrl() {
            // Encode the name and score directly into the URL for simulation
            // This makes the link self-contained for basic demo purposes
            return `${window.location.origin}${window.location.pathname}?challengeName=${encodeURIComponent(userName)}&challengeScore=${score}&challengeId=${currentShareId}`;
        }

        function getShareText() {
            return encodeURIComponent(`${userName} scored ${score} out of ${totalQuestionsPerSession} on the Product Realization Quiz! Can you beat my score?`);
        }

        shareWhatsappButton.addEventListener('click', () => {
            if (!currentShareId) {
                showModalMessage("Please complete a quiz first to generate a shareable score!");
                return;
            }
            const shareUrl = getShareUrl();
            const text = getShareText();
            window.open(`https://wa.me/?text=${text}%0A${encodeURIComponent(shareUrl)}`, '_blank');
        });

        shareFacebookButton.addEventListener('click', () => {
            if (!currentShareId) {
                showModalMessage("Please complete a quiz first to generate a shareable score!");
                return;
            }
            const shareUrl = getShareUrl();
            const text = getShareText();
            // Facebook share dialog URL
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${text}`, '_blank');
        });

        sharePinterestButton.addEventListener('click', () => {
            if (!currentShareId) {
                showModalMessage("Please complete a quiz first to generate a shareable score!");
                return;
            }
            const shareUrl = getShareUrl();
            const text = getShareText();
            // Pinterest requires an image URL, which we don't have for a dynamic score card.
            // We'll share the link with a generic description.
            window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${text}`, '_blank');
        });

        shareTeamsButton.addEventListener('click', () => {
            if (!currentShareId) {
                showModalMessage("Please complete a quiz first to generate a shareable score!");
                return;
            }
            const shareUrl = getShareUrl();
            const text = getShareText();
            // Microsoft Teams share URL (basic text share)
            window.open(`https://teams.microsoft.com/share?msgText=${text}&mask=false&href=${encodeURIComponent(shareUrl)}`, '_blank');
        });

        // --- Challenge Logic ---
        function checkChallengeInUrl() {
            const urlParams = new URLSearchParams(window.location.search);
            const challengeIdFromUrl = urlParams.get('challengeId');
            const challengeNameFromUrl = urlParams.get('challengeName');
            const challengeScoreFromUrl = urlParams.get('challengeScore');

            if (challengeIdFromUrl && challengeNameFromUrl && challengeScoreFromUrl !== null) {
                challengedShareId = challengeIdFromUrl;
                challengedSharerName = decodeURIComponent(challengeNameFromUrl);
                challengedSharerScore = parseInt(challengeScoreFromUrl);

                // Display challenge intro screen
                startScreen.classList.add('hidden');
                quizScreen.classList.add('hidden');
                scoreCard.classList.add('hidden');
                challengeIntroScreen.classList.remove('hidden');
                quizAppContainer.classList.add('show');

                challengerNameDisplay.textContent = challengedSharerName;
                challengerScoreDisplay.textContent = challengedSharerScore;
            } else {
                // No challenge parameters, show normal start screen
                startScreen.classList.remove('hidden');
                quizAppContainer.classList.add('show');
            }
        }

        // Initial check for challenge in URL when the page loads
        window.addEventListener('load', checkChallengeInUrl);

        // --- Event Listeners ---
        // For the initial start button (on the main landing page)
        startButton.addEventListener('click', () => startGame(false));
        // For the start challenge button (on the challenge intro page)
        startChallengeButton.addEventListener('click', () => startGame(true));
        restartButton.addEventListener('click', resetQuiz);

