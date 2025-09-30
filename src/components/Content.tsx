import React from "react";
import ContentComponent from "./ContentComponent";
import { Brain, Bot, TreeDeciduous, ChartSpline, BrainCircuit, Syringe, Trees, Users, SquareDashed } from "lucide-react";
import LogisticRegression3D from "./visualization/LogisticRegression3D";
// import { MathJax, MathJaxContext } from "better-react-mathjax";
// import CodeViewer from "./CodeViewer";
import { LogisticRegression } from "@/topicContent/LogisticRegression";
import { log } from "console";

export interface TopicContent {
  content?: React.ReactNode;
  visualization?: React.ReactNode;

}



export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  content: TopicContent[];
  duration: string;
  icon: typeof Brain;
  questions: QuizQuestion[];
}
export const topics: Topic[] = [
  {
    id: 'ai-for-diabetes',
    title: 'AI for Diabetes Prediction',
    description: 'Using AI to detect diabetes risk early and prevent complications',
    duration: '15 min',
    icon: Syringe,
    content: [
      {
        content: (
          <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", textAlign: "justify" }}>
            {/* <div> */}

            <ContentComponent
              title="The Diabetes Crisis and How AI Can Help"

              list={
                <div>

                  <p>
                    <b>
                      Diabetes
                    </b>  is a rapidly growing global health concern, especially in developing countries where lifestyle changes and limited access to early screening have accelerated its spread. A significant challenge lies in the fact that many individuals remain undiagnosed until the disease has already caused complications, largely due to the reliance on traditional blood tests that may be costly, inaccessible, or uncomfortable.
                  </p>
                  <p>
                    <b>
                      Artificial intelligence (AI)
                    </b> offers a promising solution to this problem. By analyzing basic, non-invasive data such as age, weight, blood pressure, and family history, AI models can predict an individual’s risk of developing diabetes before symptoms appear. This predictive approach makes early intervention more accessible, low-cost, and scalable.
                  </p>
                  <p>
                    <b>
                      AI-powered applications
                    </b> can provide quick risk assessments through mobile devices or local clinics, guiding individuals toward timely medical testing or lifestyle adjustments. While AI does not replace healthcare professionals, it strengthens their capacity to reach larger populations efficiently, reduce long-term healthcare costs, and promote preventive care.
                  </p>
                  <p>
                    In this way, AI functions as a valuable tool in bridging the gap between limited healthcare resources and the growing need for early detection, ultimately contributing to more effective public health strategies.
                  </p>

                </div>
              }
            />
            {/* </div> */}

            <img src="./assets/diab-crisis.png" alt="Diabetes Crisis" style={{ width: "300px", height: "300px" }} />
          </div>
        )
      },

    ],

    questions: [
      {
        id: 'q1',
        question: 'What makes diabetes dangerous over time?',
        options: [
          'It improves blood circulation',
          'It causes high blood sugar leading to serious complications',
          'It only affects children',
          'It reduces insulin naturally'
        ],
        correctAnswer: 1,
        explanation: 'High blood sugar can lead to heart disease, kidney failure, vision loss, and amputations.'
      },
      {
        id: 'q2',
        question: 'Which factor is contributing to the rise of diabetes in countries like Egypt?',
        options: [
          'Increased outdoor activity',
          'Lower food prices',
          'Urban lifestyles and poor diets',
          'Shorter working hours'
        ],
        correctAnswer: 2,
        explanation: 'Unhealthy diets, lack of movement, and city lifestyles are causing a rise in diabetes cases.'
      },
      {
        id: 'q3',
        question: 'Why do many people remain undiagnosed with diabetes?',
        options: [
          'Blood tests are always free and easy',
          'Diabetes is harmless in early stages',
          'Diagnosis methods can be expensive or hard to access',
          'Doctors avoid diagnosing diabetes'
        ],
        correctAnswer: 2,
        explanation: 'Blood tests may be uncomfortable, costly, or not easily available, delaying diagnosis.'
      },
      {
        id: 'q4',
        question: 'How can AI help in diabetes prevention?',
        options: [
          'By replacing doctors',
          'By predicting risk using basic personal data',
          'By performing surgeries automatically',
          'By eliminating the need for diet and exercise'
        ],
        correctAnswer: 1,
        explanation: 'AI uses information like age, weight, and family history to predict risk early and recommend action.'
      }
    ]
  },
  {
    id: 'ml-for-diabetes',
    title: 'Machine Learning for Diabetes Prediction',
    description: 'How ML predicts diabetes using health data and binary classification',
    duration: '15 min',
    icon: Bot,
    content: [
      {
        content: (
          <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
            <div>
              {/* <h1 className="text-xl font-bold">Goal of Machine Learning in Diabetes</h1> */}
              <ContentComponent
                title="Goal of Machine Learning in Diabetes"
                description="The main goal of using machine learning for diabetes is to build a smart system that can predict if someone has diabetes—or may develop it—based on simple health features like blood sugar level, BMI, age, family history, and physical activity. The system learns from past patient data, such as the Pima Indians Diabetes Dataset, to recognize patterns that link certain features to diabetes risk."
              />
            </div>
            <img src="./assets/risk-factor-type-II-diabetes.png" alt="ML Goal" style={{ width: '400px', height: '300px' }} />
          </div>
        )
      },
      {
        content: (
          <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
            <div>
              {/* <h1 className="text-xl font-bold">Binary Classification & Supervised Learning</h1> */}
              <ContentComponent
                title="Binary Classification & Supervised Learning"
                description="This problem is a binary classification task—meaning the model predicts one of two outcomes: 'Diabetic' or 'Not Diabetic'. It uses supervised learning, where the system is trained on labeled data (examples where the correct answer is already known), similar to learning with flashcards that include both the question and correct answer."
              />
            </div>
            <img src="./assets/binaryClassification.png" alt="Binary Classification" style={{ width: '300px', height: '300px' }} />
          </div>
        )
      },
      {
        content: (
          <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
            <div>
              {/* <h1 className="text-xl font-bold">Input Layer & Logistic Regression</h1> */}
              <ContentComponent
                title="Input Layer & Logistic Regression"
                description="The input layer of the model uses features like blood sugar, BMI, blood pressure, age, and medical history. After encoding and cleaning the data, logistic regression is applied to separate patients into two groups: Diabetes (e.g., red diamond) or Normal (e.g., green circle). The model learns a decision boundary that helps classify new data."
              />
            </div>
            <img src="./assets/log-reg.png" alt="Logistic Regression" style={{ width: '400px', height: '300px' }} />
          </div>
        )
      },
      {
        content: (
          <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
            <div>
              {/* <h1 className="text-xl font-bold">Prediction & Real-World Use</h1> */}
              <ContentComponent
                title="Prediction & Real-World Use"
                description="Once trained, the model predicts whether a new person is diabetic or not based on their data. This can be turned into an app or online tool where users simply enter basic information and receive a risk score instantly. It doesn't diagnose diabetes but helps identify high-risk individuals early so doctors can step in before complications develop."
              />
            </div>
            <img src="./assets/prediction.jpg" alt="AI Prediction" style={{ width: '450px', height: '300px' }} />
          </div>
        )
      }
    ],

    questions: [
      {
        id: 'q1',
        question: 'What is the main goal of using machine learning for diabetes?',
        options: [
          'To replace doctors',
          'To predict diabetes risk using basic health features',
          'To perform surgeries automatically',
          'To eliminate hospitals'
        ],
        correctAnswer: 1,
        explanation: 'ML predicts who might have or develop diabetes using simple health factors like BMI, age, and glucose levels.'
      },
      {
        id: 'q2',
        question: 'What type of machine learning problem is diabetes prediction?',
        options: [
          'Regression',
          'Binary classification',
          'Unsupervised clustering',
          'Image recognition'
        ],
        correctAnswer: 1,
        explanation: 'It is a binary classification problem, where the output is either “Diabetic” or “Not Diabetic.”'
      },
      {
        id: 'q3',
        question: 'Which algorithm is commonly used for binary diabetes prediction?',
        options: [
          'K-means Clustering',
          'Linear Regression',
          'Logistic Regression',
          'Convolutional Networks'
        ],
        correctAnswer: 2,
        explanation: 'Logistic regression works well for binary classification tasks like diabetes prediction.'
      },
      {
        id: 'q4',
        question: 'How does AI help after making predictions?',
        options: [
          'By diagnosing without medical tests',
          'By providing instant risk scores for early intervention',
          'By replacing doctor appointments entirely',
          'By prescribing medication automatically'
        ],
        correctAnswer: 1,
        explanation: 'AI supports early awareness and helps doctors identify people who need attention sooner.'
      }
    ]
  },
  {
    id: 'ml-intro',
    title: 'Introduction to Machine Learning',
    description: 'Understanding how machines learn from data to make predictions and decisions',
    duration: '15 min',
    icon: Brain,
    content: [
      {
        content: (
          <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", textAlign: "justify" }}>
            <div>
              {/* <h1 className="text-xl font-bold">What is Machine Learning?</h1> */}
              <ContentComponent
                title="What is Machine Learning?"
                // description="" 
                list={
                  <div>
                    <p>
                      <b>Machine Learning (ML)</b> is a branch of Artificial Intelligence (AI) that enables computers to learn from data and make predictions or decisions without being explicitly programmed for every situation. Unlike traditional programming, where rules are hardcoded, ML systems adapt to new information, recognize patterns, and improve their performance as more data becomes available.
                    </p>
                    <p>
                      <b>
                        At its core
                      </b>
                      , ML involves feeding data into algorithms that “learn” mathematical models to map inputs (features) to outputs (predictions). For instance, using health records that include features such as age, blood sugar levels, and body mass index (BMI), ML can predict whether a patient is at risk of developing diabetes.
                    </p>
                    
                    This capability makes ML applicable across many fields, including medicine, finance, education, and engineering.
                  </div>
                }
              />
            </div>
            <img src="./assets/machine-learning.jpg" alt="Introduction to ML" style={{ width: '400px', height: '300px' }} />
          </div>
        )
      },
      {
        content: (
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
            <div>
              {/* <h1 className="text-xl font-bold">How Machine Learning Works</h1> */}
              <ContentComponent
                title="How Machine Learning Works"
                description="ML works by feeding data into an algorithm that learns a mathematical model to map inputs to outputs. For example, by analyzing health features like age, blood sugar, and BMI, an ML model can predict whether a patient is likely to develop diabetes. This approach enables smarter decision-making in fields like medicine, finance, and education."
              />
            </div>
            <img src="./assets/ML-work.png" alt="ML Process" style={{ width: '800px', height: '300px' }} />
          </div>
        )
      },
      {
        content: (
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
            <div>
              {/* <h1 className="text-xl font-bold">Main Types of Machine Learning</h1> */}
              <ContentComponent
                title="Main Types of Machine Learning"
                description="There are four main types of machine learning: Supervised Learning, Unsupervised Learning, Semi-Supervised Learning, and Reinforcement Learning. Each type learns differently—from labeled data, unlabeled data, a mix of both, or through trial and feedback."
              />
            </div>
            <img src="./assets/Types_of_Machine_Learning.jpg" alt="Types of ML" style={{ width: '400px', height: '300px' }} />
          </div>
        )
      },
      {
        content: (
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
            <div>
              {/* <h1 className="text-xl font-bold">Examples of Each ML Type</h1> */}
              <ContentComponent
                title="Examples of Each ML Type"
                description="Supervised Learning: Predicting diabetes based on features like glucose and age. 
Unsupervised Learning: Grouping similar patients by health profiles. 
Semi-Supervised Learning: Using a small amount of labeled data with a larger set of unlabeled data for better predictions. 
Reinforcement Learning: AI making decisions through trial and feedback, like recommending lifestyle changes to improve health."
              />
            </div>
            <img src="./assets/Types_of_Machine_Learning.jpg" alt="ML Use Cases" style={{ width: '400px', height: '300px' }} />
          </div>
        )
      }
    ],

    questions: [
      {
        id: 'q1',
        question: 'What is the main purpose of Machine Learning?',
        options: [
          'To hardcode every rule manually',
          'To help computers learn from data and make predictions',
          'To replace programming languages',
          'To design websites automatically'
        ],
        correctAnswer: 1,
        explanation: 'ML enables systems to learn patterns from data and make predictions or decisions without being explicitly programmed for each scenario.'
      },
      {
        id: 'q2',
        question: 'Which of the following is an example of supervised learning?',
        options: [
          'Clustering patients by glucose levels without labels',
          'Predicting diabetes using labeled health data',
          'Training a robot through trial and error',
          'Sorting images without knowing the categories'
        ],
        correctAnswer: 1,
        explanation: 'Supervised learning uses labeled data to make predictions, such as identifying whether someone is diabetic based on known diagnoses.'
      },
      {
        id: 'q3',
        question: 'What does unsupervised learning do?',
        options: [
          'Uses labeled data to classify outcomes',
          'Finds hidden patterns in unlabeled data',
          'Learns through rewards and penalties',
          'Analyzes video game strategies'
        ],
        correctAnswer: 1,
        explanation: 'Unsupervised learning identifies patterns or clusters in data without knowing the correct outputs beforehand.'
      },
      {
        id: 'q4',
        question: 'Which ML type combines both labeled and unlabeled data?',
        options: [
          'Supervised Learning',
          'Unsupervised Learning',
          'Semi-Supervised Learning',
          'Reinforcement Learning'
        ],
        correctAnswer: 2,
        explanation: 'Semi-supervised learning uses a small amount of labeled data with a larger set of unlabeled data to improve learning efficiency.'
      },
      {
        id: 'q5',
        question: 'What is a key feature of reinforcement learning?',
        options: [
          'It only uses labeled data',
          'It learns through rewards and penalties over time',
          'It requires no training data',
          'It only works with numerical inputs'
        ],
        correctAnswer: 1,
        explanation: 'Reinforcement learning improves by trying actions and learning from rewards or penalties, similar to human experience-based learning.'
      }
    ]
  },
  {
    id: 'supervised-learning',
    title: 'Supervised Learning in Machine Learning',
    description: 'How labeled data helps predict outcomes like diabetes risk',
    duration: '15 min',
    icon: BrainCircuit,
    content: [
      {
        content: (
          <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
            <div>
              {/* <h1 className="text-xl font-bold">What is Supervised Learning?</h1> */}
              <ContentComponent
                title="What is Supervised Learning?"
                description="Supervised learning is the most widely used type of machine learning. It involves training a model on labeled data, where both input features and their correct outputs (labels) are known. The goal is to learn the relationship between inputs and outputs so the model can correctly predict labels for new, unseen data. In diabetes prediction, features like glucose level, BMI, age, and insulin level are used along with labels indicating whether a person is diabetic or not."
              />
            </div>
            <img
              src="./assets/Supervised_ML.png"
              alt="Supervised Learning Intro"
              style={{ width: "600px", height: "400px" }}
            />
          </div>
        )
      },
      {
        content: (
          <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
            <div>
              {/* <h1 className="text-xl font-bold">How Supervised Learning Works</h1> */}
              <ContentComponent
                title="How Supervised Learning Works"
                description="Supervised learning works in two major phases. In the training phase, the algorithm is given labeled data — for example, patient records where each entry includes features like age, glucose level, and BMI, along with a label such as 'Diabetic' (Yes or No). The learning phase involves analyzing patterns in this data to build a predictive model. Once trained, the model enters the prediction phase, where it can classify or estimate outcomes for new inputs based on the patterns it has learned."
              />
            </div>
            <img
              src="./assets/Supervised_ML.png"
              alt="Supervised Learning Intro"
              style={{ width: "600px", height: "400px" }}
            />
          </div>
        )
      },
      {
        content: (
          <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
            <div>
              {/* <h1 className="text-xl font-bold">Types, Algorithms, and Importance</h1> */}
              <ContentComponent
                title="Types, Algorithms, and Importance"
                description="Supervised learning includes two main types: classification and regression. Classification deals with categorical outcomes like spam vs. not spam, benign vs. malignant tumors, or diabetic vs. non-diabetic. Regression predicts numerical values such as house prices or blood sugar levels. Common classification algorithms include Logistic Regression, Decision Trees, Random Forests, SVM, k-NN, Naïve Bayes, and Neural Networks. Regression techniques include Linear Regression, Ridge and Lasso Regression, SVR, and Gradient Boosting Regressors. Supervised learning is vital in healthcare, finance, marketing, and technology, powering medical diagnosis tools, fraud detection, recommendation systems, and more. Its accuracy depends heavily on the quantity and quality of labeled data."
              />
            </div>
            <img
              src="./assets/Supervised_ML.png"
              alt="Supervised Learning Intro"
              style={{ width: "600px", height: "400px" }}
            />
          </div>
        )
      }
    ],

    questions: [
      {
        id: 'q1',
        question: 'What is the main characteristic of supervised learning?',
        options: [
          'It uses unlabeled data for training',
          'It learns from labeled data with known outputs',
          'It predicts only numerical values',
          'It does not require data'
        ],
        correctAnswer: 1,
        explanation: 'Supervised learning uses labeled data where both inputs and correct outputs are known.'
      },
      {
        id: 'q2',
        question: 'Which of the following is an example of a classification problem?',
        options: [
          'Predicting house prices',
          'Diagnosing diabetes as Yes or No',
          'Estimating temperature values',
          'Forecasting stock trends numerically'
        ],
        correctAnswer: 1,
        explanation: 'Classifying diabetes (Yes or No) is a categorical output, which makes it a classification task.'
      },
      {
        id: 'q3',
        question: 'Which phase comes after training in supervised learning?',
        options: [
          'Prediction phase',
          'Data cleaning phase',
          'Label generation phase',
          'Unsupervised exploration'
        ],
        correctAnswer: 0,
        explanation: 'After training, the model enters the prediction phase to classify or predict unseen data.'
      },
      {
        id: 'q4',
        question: 'Which of the following is a supervised learning algorithm?',
        options: [
          'K-means Clustering',
          'Logistic Regression',
          'Apriori Algorithm',
          'DBSCAN'
        ],
        correctAnswer: 1,
        explanation: 'Logistic Regression is a common supervised learning algorithm used for classification.'
      }
    ]
  },
  LogisticRegression

  // {
  //   id: 'logistic-regression',
  //   title: 'Logistic Regression in Machine Learning',
  //   description: 'Understanding classification, sigmoid function, and diabetes prediction',
  //   duration: '15 min',
  //   icon: ChartSpline,
  //   content: [
  //     {
  //       content: (
  //         <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //           <div>
  //             <ContentComponent
  //               title="What is Logistic Regression?"
  //               description="Logistic Regression is a statistical method used for binary classification problems, where the goal is to predict one of two outcomes such as diabetic vs. non-diabetic. Unlike linear regression, which predicts continuous values, logistic regression predicts probabilities that are then mapped to categories."
  //             />
  //           </div>
  //           <img src="./assets/log-reg-idea.jpg" alt="Logistic Regression" style={{ width: "600px", height: "400px" }} />
  //         </div>
  //       )
  //     },
  //     {
  //       content: (
  //         <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //           <div>
  //             <ContentComponent
  //               title="Why Logistic Regression for Diabetes?"
  //               description="Diabetes prediction is a binary problem: a person either has diabetes or not. Logistic regression is perfectly suited because it can model the probability of diabetes based on health features like glucose levels, BMI, and age, making it simple yet effective."
  //             />
  //           </div>
  //           <img src="./assets/log-reg.png" alt="Logistic Regression" style={{ width: "600px", height: "400px" }} />
  //         </div>

  //       )
  //     },
  //     {
  //       content: (
  //         <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //           <div>
  //             <ContentComponent
  //               title="The Sigmoid Function"
  //               description="Logistic regression uses the sigmoid function to convert any input value into a probability between 0 and 1. If the probability is greater than 0.5, the model predicts 'Diabetic'; if it is less, it predicts 'Not Diabetic'. The S-shaped curve ensures smooth probability outputs."
  //             />
  //           </div>
  //           <img src="./assets/log-reg.png" alt="Logistic Regression" style={{ width: "600px", height: "400px" }} />
  //         </div>
  //       )
  //     },
  //     {
  //       content: (
  //         <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //           <div>
  //             <ContentComponent
  //               title="Decision Boundary"
  //               description="The decision boundary is the line (or curve) that separates the two classes in logistic regression. For diabetes prediction, it’s the threshold where the probability switches from non-diabetic to diabetic. This helps doctors identify patients at high risk quickly."
  //             />
  //           </div>
  //           <img src="./assets/decision-boundary.png" alt="Logistic Regression" style={{ width: "600px", height: "400px" }} />
  //         </div>
  //       )
  //     },
  //     {
  //       content: (
  //         <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //           <div>
  //             <ContentComponent
  //               title="Training and Prediction"
  //               description="During training, the model adjusts weights to minimize error between predicted probabilities and actual outcomes. Once trained, it can predict diabetes risk for new patients by applying the learned mapping and the sigmoid function."
  //             />
  //           </div>
  //           <img src="./assets/train-pred.png" alt="Logistic Regression" style={{ width: "600px", height: "400px" }} />
  //         </div>
  //       )
  //     },
  //     {
  //       content: (
  //         <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //           <div>
  //             <ContentComponent
  //               title="Advantages and Applications"
  //               description="Logistic regression is easy to implement, interpretable, and computationally efficient. It is widely used in healthcare for disease prediction, in marketing for customer churn prediction, and in finance for fraud detection."
  //             />
  //           </div>
  //           <img src="./assets/customer-chun.png" alt="Logistic Regression" style={{ width: "600px", height: "400px" }} />
  //         </div>
  //       )
  //     }
  //     , {
  //       visualization: <LogisticRegression3D></LogisticRegression3D>
  //     }
  //   ],

  //   questions: [
  //     {
  //       id: 'q1',
  //       question: 'What type of problems is logistic regression mainly used for?',
  //       options: ['Regression problems', 'Binary classification problems', 'Unsupervised learning tasks', 'Clustering tasks'],
  //       correctAnswer: 1,
  //       explanation: 'Logistic regression is mainly used for binary classification problems.'
  //     },
  //     {
  //       id: 'q2',
  //       question: 'What does logistic regression output?',
  //       options: ['Exact categories', 'Probabilities between 0 and 1', 'Continuous values', 'Decision trees'],
  //       correctAnswer: 1,
  //       explanation: 'Logistic regression outputs probabilities that are then mapped to categories.'
  //     },
  //     {
  //       id: 'q3',
  //       question: 'Which mathematical function is used in logistic regression?',
  //       options: ['Linear function', 'Sigmoid function', 'Exponential function', 'Square root function'],
  //       correctAnswer: 1,
  //       explanation: 'The sigmoid function is used to map outputs into probabilities between 0 and 1.'
  //     },
  //     {
  //       id: 'q4',
  //       question: 'In diabetes prediction, logistic regression predicts:',
  //       options: ['The exact blood sugar level', 'Whether someone is diabetic or not', 'The patient’s weight', 'Future glucose readings'],
  //       correctAnswer: 1,
  //       explanation: 'It predicts the probability of being diabetic or not (binary outcome).'
  //     },
  //     {
  //       id: 'q5',
  //       question: 'What happens if the predicted probability is greater than 0.5?',
  //       options: ['The patient is predicted non-diabetic', 'The patient is predicted diabetic', 'The result is inconclusive', 'The model retrains'],
  //       correctAnswer: 1,
  //       explanation: 'A probability greater than 0.5 is classified as diabetic.'
  //     },
  //     {
  //       id: 'q6',
  //       question: 'What is the role of the decision boundary?',
  //       options: ['It removes outliers', 'It separates the two classes', 'It calculates BMI', 'It encodes patient features'],
  //       correctAnswer: 1,
  //       explanation: 'The decision boundary is the threshold that separates diabetic and non-diabetic predictions.'
  //     },
  //     {
  //       id: 'q7',
  //       question: 'Which of the following is NOT an application of logistic regression?',
  //       options: ['Fraud detection', 'Spam classification', 'Diabetes prediction', 'Sorting unlabeled data into clusters'],
  //       correctAnswer: 3,
  //       explanation: 'Sorting unlabeled data into clusters is an unsupervised task, not logistic regression.'
  //     },
  //     {
  //       id: 'q8',
  //       question: 'Why is logistic regression popular in healthcare?',
  //       options: ['It requires no data', 'It predicts continuous sugar levels', 'It is interpretable and efficient', 'It is only used for images'],
  //       correctAnswer: 2,
  //       explanation: 'Logistic regression is simple, interpretable, and effective for binary medical diagnoses.'
  //     },
  //     {
  //       id: 'q9',
  //       question: 'During training, what does logistic regression optimize?',
  //       options: ['The distance between data points', 'The error between predictions and actual labels', 'The clustering of features', 'The random forest splits'],
  //       correctAnswer: 1,
  //       explanation: 'It minimizes the error between predicted probabilities and actual outcomes.'
  //     },
  //     {
  //       id: 'q10',
  //       question: 'True or False: Logistic regression can only be used for predicting continuous outcomes.',
  //       options: ['True', 'False'],
  //       correctAnswer: 1,
  //       explanation: 'False, it is used for classification, not continuous outcomes.'
  //     },
  //     {
  //       id: 'q11',
  //       question: 'True or False: Logistic regression uses the sigmoid function to generate probabilities.',
  //       options: ['True', 'False'],
  //       correctAnswer: 0,
  //       explanation: 'True, the sigmoid function maps values to probabilities between 0 and 1.'
  //     },
  //     {
  //       id: 'q12',
  //       question: 'Which field often uses logistic regression for churn prediction?',
  //       options: ['Astronomy', 'Marketing', 'Agriculture', 'Geology'],
  //       correctAnswer: 1,
  //       explanation: 'Marketing uses logistic regression to predict customer churn.'
  //     },
  //     {
  //       id: 'q13',
  //       question: 'Which algorithm is simpler: logistic regression or neural networks?',
  //       options: ['Logistic regression', 'Neural networks', 'Both are the same', 'It depends on data'],
  //       correctAnswer: 0,
  //       explanation: 'Logistic regression is simpler and more interpretable than neural networks.'
  //     },
  //     {
  //       id: 'q14',
  //       question: 'In logistic regression, what threshold is commonly used to classify outcomes?',
  //       options: ['0.3', '0.5', '0.7', '1.0'],
  //       correctAnswer: 1,
  //       explanation: 'By default, 0.5 is used as the classification threshold.'
  //     },
  //     {
  //       id: 'q15',
  //       question: 'True or False: Logistic regression is a type of supervised learning.',
  //       options: ['True', 'False'],
  //       correctAnswer: 0,
  //       explanation: 'True, it requires labeled data for training.'
  //     },
  //     {
  //       id: 'q16',
  //       question: 'Which is NOT a step in logistic regression?',
  //       options: ['Training with labeled data', 'Using sigmoid function', 'Creating a decision boundary', 'Clustering unlabeled data'],
  //       correctAnswer: 3,
  //       explanation: 'Clustering unlabeled data is unsupervised learning, not logistic regression.'
  //     },
  //     {
  //       id: 'q17',
  //       question: 'Which is an advantage of logistic regression?',
  //       options: ['Difficult to interpret', 'Computationally efficient', 'Works only for images', 'Requires huge datasets'],
  //       correctAnswer: 1,
  //       explanation: 'It is efficient and easy to interpret.'
  //     },
  //     {
  //       id: 'q18',
  //       question: 'True or False: Logistic regression can classify multiple categories without modification.',
  //       options: ['True', 'False'],
  //       correctAnswer: 1,
  //       explanation: 'False, logistic regression by default is binary, though extensions like multinomial logistic regression exist.'
  //     },
  //     {
  //       id: 'q19',
  //       question: 'Which function best describes the shape of the logistic curve?',
  //       options: ['Linear', 'S-shaped (sigmoid)', 'Circular', 'Exponential growth'],
  //       correctAnswer: 1,
  //       explanation: 'The sigmoid curve is S-shaped.'
  //     },
  //     {
  //       id: 'q20',
  //       question: 'Why is logistic regression considered interpretable?',
  //       options: ['It requires no math', 'Coefficients show how features affect outcomes', 'It creates random trees', 'It skips feature importance'],
  //       correctAnswer: 1,
  //       explanation: 'The coefficients of logistic regression show how features influence the predicted probability.'
  //     }
  //   ]
  // },
  //   {
  //     id: 'decision-tree',
  //     title: 'Decision Tree in Machine Learning',
  //     description: 'How Decision Trees help classify and predict outcomes like diabetes risk',
  //     duration: '20 min',
  //     icon: TreeDeciduous,
  //     content: [
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent
  //                 title="What is a Decision Tree?"
  //                 description="A Decision Tree is a supervised machine learning algorithm for classification and regression. It mimics human decision-making by splitting data into branches based on feature values. Internal nodes represent decision rules, branches represent outcomes, and leaf nodes represent final predictions. Decision Trees are intuitive, interpretable, and handle complex relationships without extensive preprocessing."
  //               />
  //             </div>
  //             <img
  //               src="./assets/DT.png"
  //               alt="Decision Tree Intro"
  //               style={{ width: "600px", height: "400px" }}
  //             />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent
  //                 title="Key Use Cases"
  //                 description="Decision Trees are used in classification (spam detection, sentiment analysis), credit scoring (loan approval), medical diagnosis (disease prediction), and customer segmentation. Their versatility makes them valuable in real-world decision-making."
  //               />
  //             </div>
  //             <img
  //               src="./assets/DT-example.png"
  //               alt="Decision Tree Use Cases"
  //               style={{ width: "600px", height: "400px" }}
  //             />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent
  //                 title="Splitting & Recursive Partitioning"
  //                 description="Decision Trees are built by recursive binary splitting. At each node, data is split based on a feature and threshold that best separates the target. Classification trees use Gini impurity or entropy, while regression trees use variance reduction or MSE. Splitting continues until stopping conditions like maximum depth or pure leaves are met."
  //               />
  //             </div>
  //             <img
  //               src="./assets/DT-partitioning.png"
  //               alt="Decision Tree Splitting"
  //               style={{ width: "600px", height: "400px" }}
  //             />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (


  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", overflow: 'hidden' }}>
  //             <div>
  //               <ContentComponent
  //                 title="Mathematical Formulation"
  //                 description="Decision Trees use metrics like Entropy and Information Gain for classification, and variance/MSE for regression. Entropy measures dataset impurity, while Information Gain measures reduction in entropy after splitting. Gini Index is an alternative impurity measure, often used for efficiency. Recursive splitting generates a binary tree where each node represents a decision."
  //               />
  //             </div>
  //             <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', overflow: 'hidden', width: '50vw' }}>
  //               <MathJaxContext>
  //                 <MathJax>{"\\(H(S)= -\\sum_{i=1}^{C} p_i \\log_2(p_i)\\)"}</MathJax>
  //                 <MathJax>{"\\(IG(S, A) = H(S) - \\sum_{v \\in Values(A)} \\frac{|S_v|}{|S|} H(S_v)\\)"}</MathJax>
  //                 <MathJax>{"\\(Gini(S) = 1 - \\sum_{i=1}^{C} p_i^2\\)"}</MathJax>
  //               </MathJaxContext>

  //             </div>
  //           </div>



  //         )
  //       },
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", justifyItems: 'center' }}>
  //             <div>
  //               <ContentComponent
  //                 title="Implementation Basics"
  //                 // description="To build a Decision Tree manually: calculate impurity, evaluate splits, select the best split, partition recursively, stop when criteria are met, and assign leaf predictions. In Python, scikit-learn's DecisionTreeClassifier simplifies training, allowing control over max_depth, min_samples_split, and criterion. Visualizing trees helps interpret learned rules."
  //                 list={
  //                   <CodeViewer code={`     from sklearn.tree import DecisionTreeClassifier
  //      from sklearn.datasets import load_iris
  //      from sklearn.model_selection import train_test_split
  //      from sklearn.metrics import accuracy_score

  //      # Load a dataset (e.g., Iris dataset)
  //      iris = load_iris()
  //      X = iris.data  # Features
  //      y = iris.target  # Target variable

  //      # Split the data into training and testing sets
  //      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

  //      # Initialize the Decision Tree Classifier
  //      # You can specify various hyperparameters like max_depth, criterion, etc.
  //      clf = DecisionTreeClassifier(max_depth=3, random_state=42)

  //      # Train the model on the training data
  //      clf.fit(X_train, y_train)

  //      # Make predictions on the test data
  //      y_pred = clf.predict(X_test)

  //      # Evaluate the model's accuracy
  //      accuracy = accuracy_score(y_test, y_pred)
  //      print(f"Accuracy: {accuracy:.2f}")

  //      # You can also visualize the tree (requires matplotlib and graphviz)
  //      # from sklearn.tree import plot_tree
  //      # import matplotlib.pyplot as plt
  //      # plt.figure(figsize=(10, 8))
  //      # plot_tree(clf, feature_names=iris.feature_names, class_names=iris.target_names, filled=True)
  //      # plt.show()

  //                 `} />
  //                 }
  //               />
  //             </div>
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent
  //                 title="Why Decision Trees Work Well"
  //                 description="Decision Trees are intuitive, handle mixed and missing data, perform well on small datasets, and are easy to explain. Feature importance is built-in, showing which inputs dominate decisions. Although not the most accurate, their transparency makes them ideal for healthcare and other high-stakes domains."
  //               />
  //             </div>
  //             <img
  //               src="./assets/diagram-success.jpg"
  //               alt="Decision Tree Advantages"
  //               style={{ width: "600px", height: "400px" }}
  //             />
  //           </div>
  //         )
  //       }
  //     ],
  //     questions: [
  //       {
  //         id: 'q1',
  //         question: 'What type of machine learning algorithm is a Decision Tree?',
  //         options: [
  //           'Unsupervised',
  //           'Supervised',
  //           'Reinforcement',
  //           'Semi-supervised'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'Decision Trees are supervised algorithms because they learn from labeled data.'
  //       },
  //       {
  //         id: 'q2',
  //         question: 'Which of these is a common use case for Decision Trees?',
  //         options: [
  //           'Clustering customer segments',
  //           'Medical diagnosis',
  //           'Generating random numbers',
  //           'Unsupervised pattern detection'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'Decision Trees are commonly used in classification tasks such as medical diagnosis.'
  //       },
  //       {
  //         id: 'q3',
  //         question: 'What does a leaf node in a Decision Tree represent?',
  //         options: [
  //           'A decision rule',
  //           'A final prediction',
  //           'An input feature',
  //           'A parent node'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'Leaf nodes represent the final prediction or outcome of the decision path.'
  //       },
  //       {
  //         id: 'q4',
  //         question: 'Which metric is used in classification trees to determine the best split?',
  //         options: [
  //           'Mean Squared Error',
  //           'Gini Impurity',
  //           'Euclidean Distance',
  //           'Cosine Similarity'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'Gini Impurity or Entropy (Information Gain) is used to find optimal splits in classification trees.'
  //       },
  //       {
  //         id: 'q5',
  //         question: 'What is a main advantage of Decision Trees?',
  //         options: [
  //           'Black-box predictions',
  //           'High interpretability',
  //           'Requires normal distribution of data',
  //           'Performs poorly on small datasets'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'Decision Trees are highly interpretable and easy to understand.'
  //       },
  //       {
  //         id: 'q6',
  //         question: 'Which stopping criterion helps prevent overfitting in a Decision Tree?',
  //         options: [
  //           'Maximum depth',
  //           'Minimum samples per leaf',
  //           'Minimum impurity decrease',
  //           'All of the above'
  //         ],
  //         correctAnswer: 3,
  //         explanation: 'All these criteria (max depth, min samples, impurity decrease) help prevent overfitting.'
  //       },
  //       {
  //         id: 'q7',
  //         question: 'Which metric is used in regression trees?',
  //         options: [
  //           'Gini Impurity',
  //           'Entropy',
  //           'Variance / MSE',
  //           'Information Gain'
  //         ],
  //         correctAnswer: 2,
  //         explanation: 'Regression trees typically use variance reduction or mean squared error.'
  //       },
  //       {
  //         id: 'q8',
  //         question: 'Which Python library is commonly used to build Decision Trees?',
  //         options: [
  //           'TensorFlow',
  //           'scikit-learn',
  //           'Matplotlib',
  //           'NumPy'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'scikit-learn provides DecisionTreeClassifier and DecisionTreeRegressor.'
  //       },
  //       {
  //         id: 'q9',
  //         question: 'What does recursive binary splitting do in a Decision Tree?',
  //         options: [
  //           'Splits dataset into smaller subsets based on feature thresholds',
  //           'Randomly assigns labels to data',
  //           'Generates features from labels',
  //           'Performs dimensionality reduction'
  //         ],
  //         correctAnswer: 0,
  //         explanation: 'Recursive binary splitting partitions the dataset at each node to improve prediction accuracy.'
  //       },
  //       {
  //         id: 'q10',
  //         question: 'Why are Decision Trees preferred in healthcare?',
  //         options: [
  //           'Because they are complex and accurate',
  //           'Because they are transparent and explainable',
  //           'Because they need lots of data',
  //           'Because they ignore patient history'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'Decision Trees provide interpretable rules, making them suitable for high-stakes domains like healthcare.'
  //       },
  //       {
  //         id: 'q11',
  //         question: 'Which feature typically dominates in diabetes prediction trees?',
  //         options: [
  //           'Blood Pressure',
  //           'Glucose',
  //           'Insulin',
  //           'Skinfold Thickness'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'Glucose is often the top feature used to split the data for diabetes prediction.'
  //       },
  //       {
  //         id: 'q12',
  //         question: 'Which problem can Decision Trees struggle with?',
  //         options: [
  //           'Overfitting',
  //           'Underfitting',
  //           'Bias from dominant features',
  //           'All of the above'
  //         ],
  //         correctAnswer: 3,
  //         explanation: 'Decision Trees can overfit, underfit, and be biased toward dominant features.'
  //       },
  //       {
  //         id: 'q13',
  //         question: 'How can Decision Trees handle missing data?',
  //         options: [
  //           'Drop rows',
  //           'Impute values',
  //           'Learn surrogate splits',
  //           'All of the above'
  //         ],
  //         correctAnswer: 3,
  //         explanation: 'Decision Trees can handle missing data via imputation, dropping rows, or surrogate splits.'
  //       },
  //       {
  //         id: 'q14',
  //         question: 'Which technique helps stabilize unstable trees?',
  //         options: [
  //           'Bagging / Random Forest',
  //           'Removing features',
  //           'Reducing data size',
  //           'Linear regression'
  //         ],
  //         correctAnswer: 0,
  //         explanation: 'Ensemble methods like Random Forest reduce variance and stabilize predictions.'
  //       },
  //       {
  //         id: 'q15',
  //         question: 'What is post-pruning?',
  //         options: [
  //           'Stopping the tree early during growth',
  //           'Cutting back branches after full growth',
  //           'Adding more features',
  //           'Splitting nodes randomly'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'Post-pruning trims branches after the tree has fully grown to prevent overfitting.'
  //       },
  //       {
  //         id: 'q16',
  //         question: 'What type of problems can Decision Trees handle naturally?',
  //         options: [
  //           'Binary classification',
  //           'Multi-class classification',
  //           'Regression',
  //           'All of the above'
  //         ],
  //         correctAnswer: 3,
  //         explanation: 'Decision Trees can handle binary, multi-class, and regression problems.'
  //       },
  //       {
  //         id: 'q17',
  //         question: 'Which visualization tool can show Decision Tree structures?',
  //         options: [
  //           'Graphviz',
  //           'Matplotlib plot_tree',
  //           'dtreeviz',
  //           'All of the above'
  //         ],
  //         correctAnswer: 3,
  //         explanation: 'All of these tools can visualize Decision Trees.'
  //       },
  //       {
  //         id: 'q18',
  //         question: 'Why might a Decision Tree be preferred over Logistic Regression?',
  //         options: [
  //           'More interpretable',
  //           'Handles non-linear relationships',
  //           'Handles missing values',
  //           'All of the above'
  //         ],
  //         correctAnswer: 3,
  //         explanation: 'Decision Trees are interpretable, handle non-linear relationships, and manage missing data.'
  //       },
  //       {
  //         id: 'q19',
  //         question: 'What is an advantage of shallow trees?',
  //         options: [
  //           'High accuracy',
  //           'Easier interpretation',
  //           'Overfitting prevention',
  //           'Both B & C'
  //         ],
  //         correctAnswer: 3,
  //         explanation: 'Shallow trees are easier to interpret and less prone to overfitting.'
  //       },
  //       {
  //         id: 'q20',
  //         question: 'Which ensemble method builds trees sequentially, correcting errors of previous trees?',
  //         options: [
  //           'Random Forest',
  //           'Bagging',
  //           'Boosting',
  //           'PCA'
  //         ],
  //         correctAnswer: 2,
  //         explanation: 'Boosting builds trees sequentially, improving on previous errors.'
  //       }
  //     ]
  //   },
  //   {
  //     id: 'random-forest',
  //     title: 'Random Forest in Machine Learning',
  //     description: 'How Random Forests ensemble many decision trees to boost accuracy, stability, and reliability',
  //     duration: '25 min',
  //     icon: Trees, // lucide-react
  //     content: [
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent
  //                 title="What is a Random Forest?"
  //                 description="Random Forest is an ensemble method that trains many decision trees on bootstrap samples and aggregates their outputs (majority vote for classification, averaging for regression). By combining diverse trees, it reduces variance and overfitting while remaining strong on tabular data."
  //               />
  //             </div>
  //             <img
  //               src="./assets/random-forest.jpg"
  //               alt="Random Forest Intro"
  //               style={{ width: "600px", height: "400px" }}
  //             />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent
  //                 title="Why Not Just One Tree?"
  //                 description="Single decision trees are intuitive but unstable—small data changes can flip splits and final predictions. Random Forest averages across many trees trained on different samples/features, yielding higher accuracy and much more stable decisions."
  //               />
  //             </div>
  //             <img
  //               src="./assets/Random-Forest-vs-Decision-Tree.jpg"
  //               alt="Single Tree vs Random Forest"
  //               style={{ width: "600px", height: "400px" }}
  //             />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (

  //           <ContentComponent
  //             title="Mathematical Formulation"
  //             list={
  //               <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start', overflow: 'hidden', width: '50vw' }}>
  //                 <p>
  //                   Random Forest aggregates predictions from many base learners (decision trees). For regression, it averages tree outputs; for classification, it calculates class probabilities by majority voting across all trees.
  //                 </p>

  //                 <MathJaxContext>
  //                   {/* Regression formula */}
  //                   <MathJax>
  //                     <b>{"\\(\\hat{y}_{\\mathrm{RF}}(x) = \\frac{1}{T} \\sum_{t=1}^{T} h_t(x)\\)"}</b>
  //                   </MathJax>
  //                   <ul style={{ marginLeft: '20px' }}>
  //                     <li> <MathJax>{"\\(\\hat{y}_{\\mathrm{RF}}(x)\\)"}: final Random Forest prediction for input {"\\(x\\)"}</MathJax></li>
  //                     <li>T: total number of trees in the forest</li>
  //                     <li><MathJax>{"\\(h_t(x)\\)"} : prediction of the t-th tree for input {"\\(x\\)"}</MathJax></li>
  //                   </ul>

  //                   {/* Classification formula */}
  //                   <MathJax>
  //                     {"\\(P(y=c \\mid x) = \\frac{1}{T} \\sum_{t=1}^{T} \\mathbf{1}\\{h_t(x)=c\\}\\)"}
  //                   </MathJax>
  //                   <ul style={{ marginLeft: '20px' }}>
  //                     <li>
  //                       <MathJax>
  //                         {"\\(P(y=c \\mid x)\\)"}: predicted probability of class{" \\(c\\) "}given input {"\\(x\\)"}
  //                       </MathJax>
  //                       {/* <b>P(y=c | x)</b>: probability that input \\(x\\) belongs to class \\(c\\) */}
  //                       </li>
  //                     <li>
  //                       <MathJaxContext>
  //                         <MathJax>{"\\(\\mathbf{1}\\{h_t(x)=c\\}\\)"} : indicator function; 1 if tree t predicts class c, 0 otherwise</MathJax>
  //                       </MathJaxContext>
  //                     </li>
  //                     <li><b>T</b>: total number of trees in the forest</li>
  //                   </ul>
  //                 </MathJaxContext>
  //               </div>
  //             }
  //           />



  //           //   </div>
  //           // </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent
  //                 title="Implementation (scikit-learn)"
  //                 list={
  //                   <CodeViewer code={`from sklearn.ensemble import RandomForestClassifier
  // from sklearn.model_selection import train_test_split
  // from sklearn.metrics import accuracy_score, classification_report
  // from sklearn.datasets import load_iris

  // X, y = load_iris(return_X_y=True)
  // X_train, X_test, y_train, y_test = train_test_split(
  //     X, y, test_size=0.2, stratify=y, random_state=42
  // )

  // rf = RandomForestClassifier(
  //     n_estimators=300,
  //     max_features="sqrt",
  //     max_depth=None,
  //     min_samples_split=2,
  //     min_samples_leaf=1,
  //     bootstrap=True,
  //     oob_score=True,
  //     n_jobs=-1,
  //     random_state=42
  // )

  // rf.fit(X_train, y_train)
  // print("OOB score:", getattr(rf, "oob_score_", None))
  // y_pred = rf.predict(X_test)
  // print("Accuracy:", accuracy_score(y_test, y_pred))
  // print(classification_report(y_test, y_pred))`} />
  //                 }
  //               />
  //             </div>
  //           </div>
  //         )
  //       },

  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent
  //                 title="Bagging & Feature Randomness"
  //                 description="In a Random Forest, bagging means each decision tree is trained on a different random sample of the data, so no single tree sees everything—this reduces overfitting and makes the overall model more reliable. Alongside that, feature randomness ensures that when a tree splits at each node, it only considers a random subset of the features instead of all of them. This prevents trees from becoming too similar and encourages more diverse decision paths. When many diverse trees vote together, the forest becomes stronger and more accurate. Together, bagging and feature randomness create a balance between variety and stability in the model. This teamwork is what makes Random Forests both powerful and dependable for prediction tasks."
  //               />
  //             </div>
  //             <img
  //               src="./assets/Random-Forest-voting.png"
  //               alt="Bagging and Feature Subspaces"
  //               style={{ width: "600px", height: "400px" }}
  //             />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent
  //                 title="Key Use Cases"
  //                 description="Fraud detection on transactional data, medical risk prediction (e.g., diabetes screening), credit scoring, and customer segmentation. Random Forests shine on noisy, heterogeneous tabular datasets where interactions and non-linearities matter."
  //               />
  //             </div>
  //             <img
  //               src="./assets/Random-Forests-Use-key.png"
  //               alt="Random Forest Use Cases"
  //               style={{ width: "600px", height: "400px" }}
  //             />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent
  //                 title="How a Random Forest Solves Diabetes Prediction"
  //                 description="Diabetes prediction is a binary classification problem where patient health features are used to predict whether a person has diabetes (1) or not (0)."
  //                 list={
  //                   <div>
  //                     <p><b>Common features used:</b></p>
  //                     <ol style={{ marginLeft: '20px' }}>
  //                       <li><b>1-</b> Glucose Level</li>
  //                       <li><b>2-</b> BMI (Body Mass Index)</li>
  //                       <li><b>3-</b> Age</li>
  //                       <li><b>4-</b> Blood Pressure</li>
  //                       <li><b>5-</b> Insulin Level</li>
  //                       <li><b>6-</b> Family History (DiabetesPedigreeFunction)</li>
  //                       <li><b>7-</b> Number of Pregnancies (for women)</li>
  //                       <li><b>8-</b> Skinfold Thickness</li>
  //                     </ol>

  //                   </div>

  //                 }
  //               />
  //             </div>
  //             {/* <img
  //               src="./assets/random-forest.png"
  //               alt="Diabetes Prediction with Random Forest"
  //               style={{ width: "600px", height: "400px" }}
  //             /> */}
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent
  //                 title="Ensemble of Expert Decisions"
  //                 description=""
  //                 list={
  //                   <div>
  //                     <p>Random Forest acts like a panel of medical experts. Each decision tree sees different parts of the data and votes on the final outcome.</p>
  //                     <ul>
  //                       <li>
  //                         <b>Dr. A:</b> If glucose {'>'} 140 and BMI &gt; 30 → high risk
  //                       </li>
  //                       <li>
  //                         <b>Dr. B:</b> If age {'>'} 35 and pregnancies {'>'} 3 → watch closely
  //                       </li>
  //                       <li>
  //                         <b>Dr. C:</b> If insulin {'>'} 200 and skinfold {'>'} 25 → suspicious
  //                       </li>
  //                       <li>Each tree learns from random samples (bootstrapping)</li>
  //                       <li>Some features are randomly ignored to reduce bias</li>
  //                       <li>Final decision is made through majority vote</li>
  //                     </ul>
  //                   </div>
  //                 }
  //               />
  //             </div>
  //             <img
  //               src="./assets/ensemble-voting-classification.png"
  //               alt="Ensemble Voting Concept"
  //               style={{ width: "600px", height: "400px" }}
  //             />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent
  //                 title="Tuning, OOB Estimation & Feature Importance"
  //                 list={
  //                   <ul>
  //                     <li>
  //                       <strong>Tuning What Matters:</strong>
  //                       Increase <code>n_estimators</code> until performance plateaus (e.g., 200–800).
  //                       Adjust <code>max_features</code> (e.g., "sqrt", "log2", or fractions) to control tree correlation.
  //                       Use <code>max_depth</code> and <code>min_samples_*</code> to reduce variance.
  //                       Apply <code>class_weight="balanced"</code> for imbalanced datasets.
  //                     </li>
  //                     <li>
  //                       <strong>Out-of-Bag (OOB) Estimation:</strong>
  //                       Since each tree ignores ~37% of samples, OOB predictions give an internal validation score.
  //                       Compare OOB score with external validation accuracy to verify performance without a separate validation split.
  //                     </li>
  //                     <li>
  //                       <strong>Feature Importance & Explainability:</strong>
  //                       Use impurity-based importances for quick insights.
  //                       Prefer permutation importance for more reliable interpretation.
  //                       Tools like Partial Dependence, SHAP, or ICE explain how features influence the ensemble.
  //                     </li>
  //                   </ul>
  //                 }
  //               />
  //             </div>
  //             <img
  //               src="./assets/Random-Forest-training.png"
  //               alt="Random Forest Insights"
  //               style={{ width: "600px", height: "400px" }}
  //             />
  //           </div>
  //         )
  //       },

  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent
  //                 title="Why It Works for Diabetes Risk"
  //                 description="Random Forest catches non-linear interactions (e.g., moderate glucose + very high BMI → high risk), is robust on small tabular datasets, handles mixed features, and offers OOB validation—ideal properties for screening tasks."
  //               />
  //             </div>
  //             <img
  //               src="./assets/prediction.jpg"
  //               alt="Healthcare Screening"
  //               style={{ width: "600px", height: "400px" }}
  //             />
  //           </div>
  //         )
  //       }
  //     ],
  //     questions: [
  //       {
  //         id: 'q1',
  //         question: 'Random Forest primarily reduces which weakness of a single decision tree?',
  //         options: ['High bias', 'High variance', 'Linear assumptions', 'Need for scaling'],
  //         correctAnswer: 1,
  //         explanation: 'Averaging many decorrelated trees reduces variance dramatically.'
  //       },
  //       {
  //         id: 'q2',
  //         question: 'What does “bagging” mean in Random Forest?',
  //         options: [
  //           'Training on the whole dataset once',
  //           'Using gradient-based boosting',
  //           'Training each tree on a bootstrap sample',
  //           'Dropping features at random during training'
  //         ],
  //         correctAnswer: 2,
  //         explanation: 'Each tree sees a bootstrap (sample-with-replacement) version of the dataset.'
  //       },
  //       {
  //         id: 'q3',
  //         question: 'At each split, Random Forest considers:',
  //         options: [
  //           'All features',
  //           'A random subset of features',
  //           'Only the most important feature',
  //           'No features (random splits)'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'Random feature subspaces reduce correlation among trees.'
  //       },
  //       {
  //         id: 'q4',
  //         question: 'For classification, Random Forest combines trees by:',
  //         options: ['Averaging numeric outputs', 'Majority voting', 'Stacking', 'Boosting'],
  //         correctAnswer: 1,
  //         explanation: 'Most-voted class across trees is selected.'
  //       },
  //       {
  //         id: 'q5',
  //         question: 'Typical default for max_features in classification is:',
  //         options: ['All features', '√p', 'p/3', 'log2(p)'],
  //         correctAnswer: 1,
  //         explanation: 'Using √p per split is a common, effective default.'
  //       },
  //       {
  //         id: 'q6',
  //         question: 'Out-of-Bag (OOB) score is useful because it:',
  //         options: [
  //           'Requires a separate validation set',
  //           'Is calculated on training samples only',
  //           'Provides a built-in generalization estimate',
  //           'Measures feature correlation'
  //         ],
  //         correctAnswer: 2,
  //         explanation: 'OOB samples are unused by a tree and serve as a free validation set.'
  //       },
  //       {
  //         id: 'q7',
  //         question: 'Which parameter primarily controls ensemble size?',
  //         options: ['max_depth', 'n_estimators', 'min_samples_split', 'ccp_alpha'],
  //         correctAnswer: 1,
  //         explanation: 'n_estimators is the number of trees in the forest.'
  //       },
  //       {
  //         id: 'q8',
  //         question: 'Random Forest is typically strong on:',
  //         options: [
  //           'Image pixels without CNNs',
  //           'Tabular data with mixed feature types',
  //           'Raw audio waveforms',
  //           'Unstructured text without preprocessing'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'It excels on structured/tabular datasets.'
  //       },
  //       {
  //         id: 'q9',
  //         question: 'Which option helps with class imbalance?',
  //         options: [
  //           'class_weight="balanced"',
  //           'Reducing n_estimators',
  //           'Increasing max_depth only',
  //           'Disabling bootstrap'
  //         ],
  //         correctAnswer: 0,
  //         explanation: 'Balanced class weights improve minority-class recall.'
  //       },
  //       {
  //         id: 'q10',
  //         question: 'Permutation importance is preferred because it:',
  //         options: [
  //           'Is faster than impurity-based importance',
  //           'Is model-agnostic and less biased',
  //           'Never changes with random_state',
  //           'Eliminates the need for validation data'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'It measures real performance drop when a feature is shuffled.'
  //       },
  //       {
  //         id: 'q11',
  //         question: 'For regression, Random Forest output is:',
  //         options: ['Median of tree outputs', 'Mode of tree outputs', 'Average of tree outputs', 'Sum of tree outputs'],
  //         correctAnswer: 2,
  //         explanation: 'Regression aggregates via averaging.'
  //       },
  //       {
  //         id: 'q12',
  //         question: 'Which hyperparameter reduces correlation between trees the most?',
  //         options: ['max_features', 'n_estimators', 'random_state', 'oob_score'],
  //         correctAnswer: 0,
  //         explanation: 'Smaller feature subsets per split yield more diverse trees.'
  //       },
  //       {
  //         id: 'q13',
  //         question: 'OOB samples per tree are roughly:',
  //         options: ['0%', '37%', '50%', '63%'],
  //         correctAnswer: 1,
  //         explanation: 'About 1 - (1 - 1/n)^n ≈ 1 - e^{-1} ≈ 0.37 are OOB.'
  //       },
  //       {
  //         id: 'q14',
  //         question: 'A key advantage over a single tree is:',
  //         options: [
  //           'Lower computational cost',
  //           'Much higher interpretability',
  //           'Better stability and accuracy',
  //           'No need for hyperparameters'
  //         ],
  //         correctAnswer: 2,
  //         explanation: 'Averaging many trees yields robust predictions.'
  //       },
  //       {
  //         id: 'q15',
  //         question: 'Which is TRUE for Random Forest probabilities?',
  //         options: [
  //           'Always perfectly calibrated',
  //           'Averaged across trees; may need calibration',
  //           'Identical to logistic regression probabilities',
  //           'Unavailable for classification'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'Probabilities come from averaging tree distributions and may need calibration.'
  //       },
  //       {
  //         id: 'q16',
  //         question: 'When evaluating a diabetes classifier, prioritize:',
  //         options: ['Precision only', 'Accuracy only', 'Recall/AUC along with accuracy', 'MSE'],
  //         correctAnswer: 2,
  //         explanation: 'Recall and AUC matter for medical screening to avoid missed positives.'
  //       },
  //       {
  //         id: 'q17',
  //         question: 'Which combo is MOST standard for a strong baseline?',
  //         options: [
  //           'n_estimators=10, max_depth=None',
  //           'n_estimators=400, max_features="sqrt"',
  //           'n_estimators=20, max_features=1.0',
  //           'n_estimators=50, bootstrap=False'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'Hundreds of trees with √p features per split is a solid baseline.'
  //       },
  //       {
  //         id: 'q18',
  //         question: 'What happens as you add more trees (keeping others fixed)?',
  //         options: [
  //           'Bias increases',
  //           'Variance typically decreases',
  //           'Training time decreases',
  //           'OOB estimate becomes unusable'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'Averaging more trees reduces variance until saturation.'
  //       },
  //       {
  //         id: 'q19',
  //         question: 'Random Forest is LESS ideal for:',
  //         options: [
  //           'High-dimensional sparse text features',
  //           'Mixed numeric/categorical tables',
  //           'Noisy tabular data',
  //           'Non-linear interactions'
  //         ],
  //         correctAnswer: 0,
  //         explanation: 'Linear models often do better on very sparse, high-dimensional data.'
  //       },
  //       {
  //         id: 'q20',
  //         question: 'RF vs. Boosting (e.g., XGBoost):',
  //         options: [
  //           'RF trains trees sequentially',
  //           'RF is usually more interpretable than a single tree',
  //           'Boosting corrects previous errors sequentially; RF averages independent trees',
  //           'Both require features to be scaled'
  //         ],
  //         correctAnswer: 2,
  //         explanation: 'Boosting is sequential error-correction; RF is parallel bagging + averaging.'
  //       }
  //     ]
  //   },
  //   {
  //     id: 'k-nearest-neighbors',
  //     title: 'K-Nearest Neighbors (KNN) in Machine Learning',
  //     description: 'A simple, intuitive instance-based classifier that predicts labels using the closest training examples.',
  //     duration: '15 min',
  //     icon: Users,
  //     content: [
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent title="What is K-Nearest Neighbors (KNN)?" description="KNN is an instance-based, lazy learning algorithm for classification (and regression). Instead of building an explicit model during training, it stores the labeled examples. At prediction time it finds the 'k' closest training points and uses their labels (majority vote for classification) to decide the output. It’s intuitive and often a great baseline." />
  //             </div>
  //             <img src="./assets/placeholder.png" alt="KNN idea" style={{ width: "600px", height: "400px" }} />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent title="Choosing k: neighbors vs. noise" description="The hyperparameter k controls how many neighbors vote. Small k (e.g., 1) makes the model sensitive to noise and outliers. Large k smooths decision boundaries but can blur class distinctions. A common approach is to try several odd k values (to avoid ties) and pick the one that performs best on validation data." />
  //             </div>
  //             <img src="./assets/placeholder.png" alt="Choosing k" style={{ width: "600px", height: "400px" }} />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent title="Distance Metrics and Feature Scaling" description="KNN relies on a distance metric (commonly Euclidean) to measure similarity. If features are on different scales, those with larger ranges dominate distances — so always scale features (standardization or min-max) before using KNN. Alternative metrics (Manhattan, Minkowski) may work better depending on the data." />
  //             </div>
  //             <img src="./assets/placeholder.png" alt="Distance metrics" style={{ width: "600px", height: "400px" }} />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent title="Decision Boundary & Weighted Voting" description="KNN’s decision boundary is formed by the Voronoi regions of training points. You can improve robustness by weighting neighbors by inverse distance so closer neighbors count more than distant ones. This often helps when classes are nearby but not evenly distributed." />
  //             </div>
  //             <img src="./assets/placeholder.png" alt="KNN decision boundary" style={{ width: "600px", height: "400px" }} />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent title="Pros, Cons, and Applications" description="KNN is easy to understand, requires no training time beyond storing data, and can adapt to complex decision boundaries. Downsides: prediction can be slow with large datasets, memory-heavy, and sensitive to irrelevant features. Common uses: recommendation systems, anomaly detection, and quick baselines for classification tasks." />
  //             </div>
  //             <img src="./assets/placeholder.png" alt="KNN pros cons" style={{ width: "600px", height: "400px" }} />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", justifyItems: 'center' }}>
  //             <div>
  //               <ContentComponent
  //                 title="Implementation Basics"
  //                 list={
  //                   <CodeViewer code={`from sklearn.neighbors import KNeighborsClassifier
  // from sklearn.datasets import load_iris
  // from sklearn.model_selection import train_test_split
  // from sklearn.preprocessing import StandardScaler
  // from sklearn.metrics import accuracy_score

  // Load a dataset (e.g., Iris dataset)

  // iris = load_iris()
  // X = iris.data # Features
  // y = iris.target # Target variable

  // Split the data

  // X_train, X_test, y_train, y_test = train_test_split(
  // X, y, test_size=0.2, random_state=42
  // )

  // Scale features (important for distance-based methods)

  // scaler = StandardScaler()
  // X_train_scaled = scaler.fit_transform(X_train)
  // X_test_scaled = scaler.transform(X_test)

  // Initialize KNN with k=3 and distance weighting

  // knn = KNeighborsClassifier(n_neighbors=3, weights='distance')

  // Train (KNN stores the training data)

  // knn.fit(X_train_scaled, y_train)

  // Predict

  // y_pred = knn.predict(X_test_scaled)

  // Evaluate accuracy

  // accuracy = accuracy_score(y_test, y_pred)
  // print(f"Accuracy: {accuracy:.2f}")

  // Tips:
  // - Use GridSearchCV to tune n_neighbors and weights.
  // - For large datasets consider approximate nearest neighbors (e.g., faiss, annoy).`} />
  //                 }
  //               />
  //             </div>
  //           </div>
  //         )
  //       }


  //     ],

  //     questions: [
  //       {
  //         id: 'q1',
  //         question: 'What type of algorithm is K-Nearest Neighbors (KNN)?',
  //         options: ['A parametric model', 'An instance-based (lazy) learning algorithm', 'A deep neural network', 'A global optimization method'],
  //         correctAnswer: 1,
  //         explanation: 'KNN is instance-based and lazy: it stores training examples and makes decisions at prediction time rather than building a global parametric model.'
  //       },
  //       {
  //         id: 'q2',
  //         question: 'In KNN classification, how is the predicted class typically chosen?',
  //         options: ['By averaging neighbor feature values', 'By majority vote among the k nearest neighbors', 'By training a decision tree on neighbors', 'By maximizing a likelihood function'],
  //         correctAnswer: 1,
  //         explanation: 'KNN predicts the class by majority voting among the k closest training examples.'
  //       },
  //       {
  //         id: 'q3',
  //         question: 'Why is feature scaling important for KNN?',
  //         options: ['KNN uses feature counts, not distances', 'Features with larger scales dominate distance calculations', 'Scaling increases model complexity', 'Scaling prevents overfitting'],
  //         correctAnswer: 1,
  //         explanation: 'KNN relies on distance metrics — if features are on different scales, those with larger ranges will dominate the distance calculation.'
  //       },
  //       {
  //         id: 'q4',
  //         question: 'What does the hyperparameter k control?',
  //         options: ['The maximum tree depth', 'The number of neighbors to consider', 'The learning rate', 'The regularization strength'],
  //         correctAnswer: 1,
  //         explanation: 'k sets how many nearest neighbors are used when making a prediction.'
  //       },
  //       {
  //         id: 'q5',
  //         question: 'Which distance metric is most commonly used with KNN?',
  //         options: ['Cosine similarity', 'Euclidean distance', 'Jaccard distance', 'Hamming distance'],
  //         correctAnswer: 1,
  //         explanation: 'Euclidean distance is the most common choice, though others (Manhattan, Minkowski) are also used depending on the data.'
  //       },
  //       {
  //         id: 'q6',
  //         question: 'What is a common technique to make neighbors closer count more than distant ones?',
  //         options: ['Bagging neighbors', 'Distance-weighted voting', 'Using more neighbors', 'Feature hashing'],
  //         correctAnswer: 1,
  //         explanation: 'Distance-weighted voting gives closer neighbors larger influence, improving robustness in many cases.'
  //       },
  //       {
  //         id: 'q7',
  //         question: 'True or False: KNN requires a training phase that fits model parameters.',
  //         options: ['True', 'False'],
  //         correctAnswer: 1,
  //         explanation: 'False. KNN is a lazy learner and mostly stores training data; there is no parameter fitting step like in parametric models.'
  //       },
  //       {
  //         id: 'q8',
  //         question: 'Which scenario is a weakness for KNN?',
  //         options: ['Small datasets', 'Well-separated classes', 'High-dimensional data with many irrelevant features', 'Low noise data'],
  //         correctAnswer: 2,
  //         explanation: 'High-dimensional data can make distances less meaningful (the "curse of dimensionality"), and irrelevant features hurt KNN performance.'
  //       },
  //       {
  //         id: 'q9',
  //         question: 'How can you speed up KNN predictions on large datasets?',
  //         options: ['Use exact brute-force distance computation', 'Reduce k to 1 always', 'Use approximate nearest neighbor libraries like faiss or annoy', 'Increase feature dimensionality'],
  //         correctAnswer: 2,
  //         explanation: 'Approximate nearest neighbor methods (faiss, annoy, KD-trees for lower dims) speed up queries at little accuracy cost.'
  //       },
  //       {
  //         id: 'q10',
  //         question: 'Which preprocessing step is especially recommended before using KNN?',
  //         options: ['One-hot encode target', 'Feature scaling (standardization or normalization)', 'Remove labels', 'Randomly shuffle features'],
  //         correctAnswer: 1,
  //         explanation: 'Feature scaling ensures that all features contribute fairly to distance calculations.'
  //       },
  //       {
  //         id: 'q11',
  //         question: 'What happens if you set k too large?',
  //         options: ['Model becomes more sensitive to noise', 'Decision boundary becomes smoother and may underfit', 'Model overfits strongly', 'Training time increases dramatically'],
  //         correctAnswer: 1,
  //         explanation: 'Large k averages over many points which smooths the boundary and can lead to underfitting.'
  //       },
  //       {
  //         id: 'q12',
  //         question: 'Which of the following is a typical application of KNN?',
  //         options: ['Image generation', 'Recommendation systems and simple classification baselines', 'Training deep reinforcement learning agents', 'Compiler optimization'],
  //         correctAnswer: 1,
  //         explanation: 'KNN is often used in recommendation settings and as a simple baseline for classification problems.'
  //       },
  //       {
  //         id: 'q13',
  //         question: 'True or False: KNN naturally provides probability estimates for class membership.',
  //         options: ['True', 'False'],
  //         correctAnswer: 0,
  //         explanation: 'True — KNN can estimate class probabilities by the proportion of neighbors belonging to each class (optionally weighted by distance).'
  //       },
  //       {
  //         id: 'q14',
  //         question: 'Which method helps reduce the effect of irrelevant features for KNN?',
  //         options: ['Feature selection or dimensionality reduction (e.g., PCA)', 'Increasing k arbitrarily', 'Using raw features only', 'Doubling the dataset size'],
  //         correctAnswer: 0,
  //         explanation: 'Feature selection or dimensionality reduction makes distances more meaningful by removing irrelevant/noisy features.'
  //       },
  //       {
  //         id: 'q15',
  //         question: 'What is the time complexity of a naive KNN prediction (brute-force) for one query with n training examples and d dimensions?',
  //         options: ['O(n + d)', 'O(nd)', 'O(log n)', 'O(1)'],
  //         correctAnswer: 1,
  //         explanation: 'A brute-force KNN prediction computes distances to all n examples, each distance costing O(d), giving O(nd).'
  //       },
  //       {
  //         id: 'q16',
  //         question: 'Which option can help when there are ties in majority voting for KNN (binary classification)?',
  //         options: ['Use even k', 'Use odd k or distance-weighted voting', 'Remove the closest neighbor', 'Increase feature count'],
  //         correctAnswer: 1,
  //         explanation: 'Choosing an odd k avoids ties in binary classification; distance-weighted voting also reduces tie probability.'
  //       },
  //       {
  //         id: 'q17',
  //         question: 'Which library provides an efficient KNN implementation in Python?',
  //         options: ['scikit-learn', 'TensorFlow Serving', 'NLTK', 'Matplotlib'],
  //         correctAnswer: 0,
  //         explanation: 'Scikit-learn includes KNeighborsClassifier with options for weighting and different neighbor algorithms (ball_tree, kd_tree, brute).'
  //       },
  //       {
  //         id: 'q18',
  //         question: 'True or False: KNN can be used for regression tasks.',
  //         options: ['True', 'False'],
  //         correctAnswer: 0,
  //         explanation: 'True — KNN regression predicts the average (or weighted average) of the neighbors’ target values.'
  //       },
  //       {
  //         id: 'q19',
  //         question: 'What is one interpretation of KNN decision regions?',
  //         options: ['They are parametric bell-shaped curves', 'They are Voronoi regions around training points', 'They are Fourier transforms', 'They are clustering centroids'],
  //         correctAnswer: 1,
  //         explanation: 'KNN decision regions can be seen as Voronoi cells: each training point controls the region of queries closest to it.'
  //       },
  //       {
  //         id: 'q20',
  //         question: 'Which of the following is NOT a recommended practice when using KNN?',
  //         options: ['Scale your features', 'Try different k values and validate', 'Include many irrelevant features without selection', 'Consider approximate neighbors for large data'],
  //         correctAnswer: 2,
  //         explanation: 'Including many irrelevant features without selection is harmful; feature selection/dimensionality reduction is recommended.'
  //       }
  //     ]
  //   },
  //   {
  //     id: 'support-vector-machine',
  //     title: 'SVM (Support Vector Machine) in Machine Learning',
  //     description: 'A powerful margin-based classifier that separates classes using optimal hyperplanes.',
  //     duration: '15 min',
  //     icon: SquareDashed,
  //     content: [
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent
  //                 title="What is SVM?"
  //                 description="Support Vector Machine (SVM) is a supervised learning algorithm that finds the best boundary, called a hyperplane, to separate classes. It focuses on maximizing the margin between the closest points of different classes, making it robust and effective, especially in high-dimensional spaces."
  //               />
  //             </div>
  //             <img src="./assets/placeholder.png" alt="SVM concept" style={{ width: "600px", height: "400px" }} />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent
  //                 title="What Are Support Vectors?"
  //                 description="Support vectors are the critical data points that lie closest to the decision boundary. These points influence the position and orientation of the separating hyperplane. Removing non-support vectors does not affect the boundary, but removing support vectors does."
  //               />
  //             </div>
  //             <img src="./assets/placeholder.png" alt="Support Vectors" style={{ width: "600px", height: "400px" }} />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent
  //                 title="Linear vs. Nonlinear Separation"
  //                 description="When data is linearly separable, SVM finds a straight hyperplane. For complex data, it uses kernels like RBF and polynomial to map inputs to higher dimensions, making separation possible. This 'kernel trick' allows SVM to handle nonlinear classification effectively."
  //               />
  //             </div>
  //             <img src="./assets/placeholder.png" alt="Linear vs Nonlinear SVM" style={{ width: "600px", height: "400px" }} />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent
  //                 title="The Role of C and Kernel"
  //                 description="The parameter C controls the tradeoff between maximizing the margin and minimizing misclassification. A high C tries to classify everything correctly, possibly overfitting, while a low C allows some errors but improves generalization. Kernels define how data is transformed for separation."
  //               />
  //             </div>
  //             <img src="./assets/placeholder.png" alt="C and Kernel" style={{ width: "600px", height: "400px" }} />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent
  //                 title="Pros, Cons, and Use Cases"
  //                 description="SVM performs well on high-dimensional and complex datasets. It works in both linear and nonlinear classification. However, it can be slower on large datasets and less interpretable than simpler models. It's widely used in fields like bioinformatics, image recognition, and text classification."
  //               />
  //             </div>
  //             <img src="./assets/placeholder.png" alt="SVM Pros and Cons" style={{ width: "600px", height: "400px" }} />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", justifyItems: 'center' }}>
  //             <div>
  //               <ContentComponent
  //                 title="Implementation Basics"
  //                 list={
  //                   <CodeViewer code={`from sklearn.svm import SVC
  // from sklearn.datasets import load_iris
  // from sklearn.model_selection import train_test_split
  // from sklearn.preprocessing import StandardScaler
  // from sklearn.metrics import accuracy_score

  // # Load dataset
  // iris = load_iris()
  // X = iris.data
  // y = iris.target

  // # Split data
  // X_train, X_test, y_train, y_test = train_test_split(
  //     X, y, test_size=0.2, random_state=42
  // )

  // # Scale features
  // scaler = StandardScaler()
  // X_train_scaled = scaler.fit_transform(X_train)
  // X_test_scaled = scaler.transform(X_test)

  // # Initialize SVM with RBF kernel
  // svm_model = SVC(kernel='rbf', gamma='scale', C=1.0)

  // # Train the model
  // svm_model.fit(X_train_scaled, y_train)

  // # Predict
  // y_pred = svm_model.predict(X_test_scaled)

  // # Evaluate
  // accuracy = accuracy_score(y_test, y_pred)
  // print(f"Accuracy: {accuracy:.2f}")`} />
  //                 }
  //               />
  //             </div>
  //           </div>
  //         )
  //       }
  //     ],

  //     questions: [
  //       {
  //         id: 'q1',
  //         question: 'What is the main goal of SVM?',
  //         options: [
  //           'To minimize training time',
  //           'To maximize the margin between classes',
  //           'To average class probabilities',
  //           'To cluster unlabeled data'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'SVM focuses on maximizing the margin between classes to improve separation and generalization.'
  //       },
  //       {
  //         id: 'q2',
  //         question: 'What are support vectors?',
  //         options: [
  //           'Random points in the dataset',
  //           'Points far from the hyperplane',
  //           'Data points closest to the decision boundary',
  //           'Misclassified examples only'
  //         ],
  //         correctAnswer: 2,
  //         explanation: 'Support vectors are the closest points to the hyperplane and influence its placement.'
  //       },
  //       {
  //         id: 'q3',
  //         question: 'What is the role of the C parameter in SVM?',
  //         options: [
  //           'It scales the input features',
  //           'It chooses the number of neighbors',
  //           'It balances margin size and misclassification tolerance',
  //           'It sets the number of trees'
  //         ],
  //         correctAnswer: 2,
  //         explanation: 'C controls the tradeoff between maximizing the margin and allowing classification errors.'
  //       },
  //       {
  //         id: 'q4',
  //         question: 'What is the purpose of the kernel trick?',
  //         options: [
  //           'To reduce memory usage',
  //           'To transform data for nonlinear separation',
  //           'To normalize predictions',
  //           'To remove irrelevant features'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'The kernel trick enables SVM to separate data by mapping it into higher-dimensional spaces.'
  //       },
  //       {
  //         id: 'q5',
  //         question: 'Which kernel is most commonly used for nonlinear problems?',
  //         options: ['Linear', 'RBF', 'Sigmoid', 'Polynomial'],
  //         correctAnswer: 1,
  //         explanation: 'RBF (Radial Basis Function) is widely used for nonlinear classification tasks.'
  //       },
  //       {
  //         id: 'q6',
  //         question: 'True or False: SVM works well with high-dimensional data.',
  //         options: ['True', 'False'],
  //         correctAnswer: 0,
  //         explanation: 'SVM handles high-dimensional spaces effectively and is often used in text and image classification.'
  //       },
  //       {
  //         id: 'q7',
  //         question: 'What does the hyperplane represent in SVM?',
  //         options: [
  //           'A cluster of random points',
  //           'A boundary that separates classes',
  //           'A measure of model accuracy',
  //           'A weight initialization method'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'The hyperplane is the boundary that separates classes in SVM.'
  //       },
  //       {
  //         id: 'q8',
  //         question: 'Which parameter affects model complexity in SVM?',
  //         options: ['gamma', 'n_neighbors', 'learning_rate', 'max_depth'],
  //         correctAnswer: 0,
  //         explanation: 'Gamma defines how much influence a single training point has in the decision boundary.'
  //       },
  //       {
  //         id: 'q9',
  //         question: 'What happens if C is set very high?',
  //         options: [
  //           'The model allows more misclassifications',
  //           'The model overfits to the training data',
  //           'The margin becomes very large',
  //           'The kernel is disabled'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'A large C forces the model to classify everything correctly, increasing risk of overfitting.'
  //       },
  //       {
  //         id: 'q10',
  //         question: 'Which of the following is a limitation of SVM?',
  //         options: [
  //           'It cannot work with text data',
  //           'It struggles with very large datasets',
  //           'It supports only regression',
  //           'It ignores support vectors'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'SVM can be slow on large datasets due to complex optimization and memory use.'
  //       },
  //       {
  //         id: 'q11',
  //         question: 'What is gamma responsible for in RBF-based SVM?',
  //         options: [
  //           'Controlling the learning rate',
  //           'Determining hyperplane orientation',
  //           'Defining how far a point’s influence reaches',
  //           'Reducing input dimensions'
  //         ],
  //         correctAnswer: 2,
  //         explanation: 'Gamma controls how much influence each training example has on the decision boundary.'
  //       },
  //       {
  //         id: 'q12',
  //         question: 'Which type of problems is SVM commonly used for?',
  //         options: [
  //           'Unsupervised clustering',
  //           'Binary and multiclass classification',
  //           'Time series forecasting',
  //           'Genetic algorithms'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'SVM is widely used for classification tasks, both binary and multiclass.'
  //       },
  //       {
  //         id: 'q13',
  //         question: 'True or False: SVM can only handle linearly separable data.',
  //         options: ['True', 'False'],
  //         correctAnswer: 1,
  //         explanation: 'False. With kernels, SVM can handle nonlinear separations effectively.'
  //       },
  //       {
  //         id: 'q14',
  //         question: 'What is a hyperplane in 2D space?',
  //         options: [
  //           'A single point',
  //           'A decision boundary line',
  //           'A cluster of features',
  //           'A probability distribution'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'In 2D, the hyperplane is simply a line separating classes.'
  //       },
  //       {
  //         id: 'q15',
  //         question: 'What does maximizing the margin help with?',
  //         options: [
  //           'Overfitting more often',
  //           'Improving generalization',
  //           'Reducing training time',
  //           'Increasing noise'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'A larger margin reduces overfitting and improves generalization to unseen data.'
  //       },
  //       {
  //         id: 'q16',
  //         question: 'Which library provides SVM in Python?',
  //         options: ['NLTK', 'Matplotlib', 'scikit-learn', 'Pandas'],
  //         correctAnswer: 2,
  //         explanation: 'scikit-learn provides SVC for classification and SVR for regression tasks.'
  //       },
  //       {
  //         id: 'q17',
  //         question: 'True or False: SVM can be used for regression.',
  //         options: ['True', 'False'],
  //         correctAnswer: 0,
  //         explanation: 'True — Support Vector Regression (SVR) is an SVM variant for regression tasks.'
  //       },
  //       {
  //         id: 'q18',
  //         question: 'What is the main advantage of using the kernel trick?',
  //         options: [
  //           'It avoids explicit transformation to high-dimensional space',
  //           'It reduces dataset size automatically',
  //           'It trains multiple trees',
  //           'It removes all outliers'
  //         ],
  //         correctAnswer: 0,
  //         explanation: 'The kernel trick lets SVM operate in high-dimensional feature space without computing coordinates explicitly.'
  //       },
  //       {
  //         id: 'q19',
  //         question: 'Which of the following is a real-world application of SVM?',
  //         options: [
  //           'Spam detection',
  //           'Weather simulation',
  //           'Audio compression',
  //           'Video rendering'
  //         ],
  //         correctAnswer: 0,
  //         explanation: 'SVM is commonly used in text classification, including spam detection.'
  //       },
  //       {
  //         id: 'q20',
  //         question: 'What is one reason to scale data before using SVM?',
  //         options: [
  //           'To remove duplicate labels',
  //           'To make distance-based kernels work properly',
  //           'To eliminate the need for C',
  //           'To convert classification to regression'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'Scaling ensures all features contribute fairly, which is essential for kernels like RBF.'
  //       }
  //     ]
  //   },
  //   {
  //     id: 'gradient-boosting',
  //     title: 'Gradient Boosting (XGBoost, LightGBM, CatBoost) in Machine Learning',
  //     description: 'Gradient Boosting is a powerful ensemble learning method that sequentially builds models to correct previous mistakes. It reduces both bias and variance, excels on tabular data, and often outperforms Random Forests.',
  //     duration: '35 min',
  //     icon: SquareDashed,
  //     content: [
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent
  //                 title="What is Boosting?"
  //                 description="Boosting is an ensemble technique where multiple weak learners, usually shallow decision trees, are trained sequentially. Each new model focuses on the residual errors of the combined previous models. Intuition: Imagine several teachers grading the same exam sequentially. Each teacher focuses on the mistakes the previous one missed. Over time, the ensemble becomes increasingly accurate."
  //                 list={
  //                   <ul>
  //                     <li>Sequential learning: models depend on previous predictions.</li>
  //                     <li>Weak learners: each tree alone may be slightly better than random.</li>
  //                     <li>Error correction: each new tree predicts residuals (errors).</li>
  //                     <li>Final prediction: sum of all trees' predictions.</li>
  //                   </ul>
  //                 }
  //               />
  //             </div>
  //             <img src="./assets/boosting_intro.png" alt="Boosting Concept" style={{ width: "600px", height: "400px" }} />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent
  //                 title="Why Gradient Boosting Outperforms Bagging"
  //                 description="Bagging (like Random Forest) reduces variance by averaging independent trees, but it doesn't reduce bias much. Gradient Boosting reduces both bias and variance by sequentially correcting mistakes. Each tree is trained on residuals of previous predictions. It also allows optimization of differentiable loss functions such as MSE, log-loss, cross-entropy, or custom objectives."
  //                 list={
  //                   <ul>
  //                     <li>Bagging: parallel, independent trees, reduces variance.</li>
  //                     <li>Boosting: sequential, dependent trees, reduces bias + variance.</li>
  //                     <li>Gradient-based optimization ensures targeted improvement.</li>
  //                     <li>Flexible loss functions adapt to regression, classification, or ranking tasks.</li>
  //                   </ul>
  //                 }
  //               />
  //             </div>
  //             <img src="./assets/error_correction.png" alt="Error Correction in Boosting" style={{ width: "600px", height: "400px" }} />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div>
  //             <ContentComponent
  //               title="Mathematical Formulation"
  //               description="Gradient Boosting builds an additive model iteratively. Let \\(F_M(x)\\) be the final prediction after \\(M\\) trees:"
  //               list={
  //                 <ul>
  //                   <li>
  //                     <MathJaxContext>
  //                       <MathJax>{"\\(F_M(x) = \\sum_{m=1}^{M} \\gamma_m h_m(x)\\)"}</MathJax>
  //                     </MathJaxContext>
  //                     , where \\(h_m(x)\\) is the m-th weak learner, and \\(\\gamma_m\\) is its weight (learning rate).
  //                   </li>
  //                   <li>
  //                     Step 1: Initialize ensemble:
  //                     <MathJaxContext>
  //                       <MathJax>{"\\(F_0(x) = \\arg\\min_{\\gamma} \\sum_{i=1}^{n} L(y_i, \\gamma)\\)"}</MathJax>
  //                     </MathJaxContext>
  //                   </li>
  //                   <li>
  //                     Step 2: Compute pseudo-residuals for each sample \\(i\\) and iteration \\(m\\):
  //                     <MathJaxContext>
  //                       <MathJax>{"\\(r_{i}^{(m)} = - \\left[ \\frac{\\partial L(y_i, F_{m-1}(x_i))}{\\partial F_{m-1}(x_i)} \\right] \\)"}</MathJax>
  //                     </MathJaxContext>
  //                   </li>
  //                   <li>
  //                     Step 3: Fit weak learner \\(h_m(x)\\) to residuals \\(r_i^(m)\\).
  //                   </li>
  //                   <li>
  //                     Step 4: Compute optimal multiplier \\(\\gamma_m\\):
  //                     <MathJaxContext>
  //                       <MathJax>{"\\(\\gamma_m = \\arg\\min_{\\gamma} \\sum_{i=1}^{n} L(y_i, F_{m-1}(x_i) + \\gamma h_m(x_i))\\)"}</MathJax>
  //                     </MathJaxContext>
  //                   </li>
  //                   <li>
  //                     Step 5: Update ensemble:
  //                     <MathJaxContext>
  //                       <MathJax>{"\\(F_m(x) = F_{m-1}(x) + \\gamma_m h_m(x)\\)"}</MathJax>
  //                     </MathJaxContext>
  //                   </li>
  //                 </ul>
  //               }
  //             />
  //           </div>
  //         )
  //       },

  //       {
  //         content: (
  //           <div>
  //             <ContentComponent
  //               title="Comparison with Random Forest (Bagging)"
  //               description="Random Forest averages independent trees to reduce variance:"
  //               list={
  //                 <ul>
  //                   <li>
  //                     <MathJaxContext>
  //                       <MathJax>{"\\(\\hat{y}_{\\text{RF}}(x) = \\frac{1}{T} \\sum_{t=1}^{T} h_t(x)\\)"}</MathJax>
  //                     </MathJaxContext>
  //                     — prediction for regression.
  //                   </li>
  //                   <li>
  //                     <MathJaxContext>
  //                       <MathJax>{"\\(P(y=c\\mid x) = \\frac{1}{T} \\sum_{t=1}^{T} \\mathbf{1}\\{h_t(x)=c\\} \\)"}</MathJax>
  //                     </MathJaxContext>
  //                     — probability prediction for classification.
  //                   </li>
  //                 </ul>
  //               }
  //             />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div>
  //             <ContentComponent
  //               title="Loss Functions"
  //               description="Different loss functions let Gradient Boosting adapt to regression, classification, and custom tasks. The pseudo-residuals depend on the derivative of the chosen loss function."
  //               list={
  //                 <ul>
  //                   <li>
  //                     <MathJaxContext>
  //                       <MathJax>{"\\text{Squared Error (Regression): } r_i = y_i - F(x_i)"}</MathJax>
  //                     </MathJaxContext>
  //                   </li>
  //                   <li>
  //                     <MathJaxContext>
  //                       <MathJax>{"\\text{Log-Loss (Binary Classification): } L = -[y \\log(p) + (1-y) \\log(1-p)]"}</MathJax>
  //                     </MathJaxContext>
  //                   </li>
  //                   <li>Cross-Entropy (Multi-class): compute gradients per class.</li>
  //                   <li>Custom Losses: ranking, survival, or asymmetric costs for imbalanced datasets.</li>
  //                 </ul>
  //               }
  //             />
  //           </div>
  //         )
  //       },
  //       // The remaining sections like XGBoost Example, Feature Importance, Evaluation Metrics, Regularization, Handling Categorical Features, and Imbalanced Data Handling remain the same, without needing MathJax, except optionally formulas for F1-score or precision/recall:
  //       {
  //         content: (
  //           <div>
  //             <ContentComponent
  //               title="Evaluation Metrics"
  //               description="Proper evaluation ensures model reliability. Common formulas:"
  //               list={
  //                 <ul>
  //                   <li>
  //                     <MathJaxContext>
  //                       <MathJax>{"\\text{Precision} = \\frac{TP}{TP + FP}"}</MathJax>
  //                     </MathJaxContext>
  //                   </li>
  //                   <li>
  //                     <MathJaxContext>
  //                       <MathJax>{"\\text{Recall} = \\frac{TP}{TP + FN}"}</MathJax>
  //                     </MathJaxContext>
  //                   </li>
  //                   <li>
  //                     <MathJaxContext>
  //                       <MathJax>{"\\text{F1-score} = 2 \\cdot \\frac{\\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}}"}</MathJax>
  //                     </MathJaxContext>
  //                   </li>
  //                 </ul>
  //               }
  //             />
  //           </div>
  //         )
  //       }
  //     ],

  //     questions: [
  //       { id: 'q1', question: 'What is the main idea of boosting?', options: ['Train trees independently', 'Sequentially correct previous errors', 'Use deep neural networks', 'Randomly shuffle features'], correctAnswer: 1, explanation: 'Boosting builds models sequentially, each correcting the errors of the previous.' },
  //       { id: 'q2', question: 'Which loss function is used for binary classification?', options: ['MSE', 'Log-loss', 'Cross-Entropy', 'Hinge'], correctAnswer: 1, explanation: 'Log-loss (binary cross-entropy) is standard for binary classification in boosting.' },
  //       { id: 'q3', question: 'Gradient Boosting reduces:', options: ['Only bias', 'Only variance', 'Both bias and variance', 'Neither'], correctAnswer: 2, explanation: 'Gradient Boosting reduces both bias and variance by sequentially correcting errors.' },
  //       { id: 'q4', question: 'Why use subsampling in Gradient Boosting?', options: ['Increase bias', 'Inject randomness to reduce variance', 'Reduce learning rate', 'Simplify feature selection'], correctAnswer: 1, explanation: 'Subsampling (stochastic gradient boosting) injects randomness to reduce variance and overfitting.' },
  //       { id: 'q5', question: 'Which library handles categorical features natively?', options: ['XGBoost', 'LightGBM', 'CatBoost', 'scikit-learn'], correctAnswer: 2, explanation: 'CatBoost natively supports categorical features without preprocessing.' },
  //       { id: 'q6', question: 'Learning rate controls:', options: ['Number of features', 'Step size of each tree', 'Dataset size', 'Tree depth'], correctAnswer: 1, explanation: 'Learning rate determines how much each tree contributes to the final prediction.' },
  //       { id: 'q7', question: 'Which metric evaluates discrimination between classes?', options: ['Accuracy', 'F1-score', 'ROC-AUC', 'Mean squared error'], correctAnswer: 2, explanation: 'ROC-AUC measures the ability to distinguish between classes.' },
  //       { id: 'q8', question: 'Residuals are used to:', options: ['Initialize trees', 'Train next tree', 'Calculate feature importance', 'Split data'], correctAnswer: 1, explanation: 'Each new tree in boosting is trained to predict the residuals (errors) of the previous ensemble.' },
  //       { id: 'q9', question: 'Why does boosting often outperform bagging?', options: ['Fewer hyperparameters', 'Sequential correction of errors', 'Parallel tree training', 'Lower computational cost'], correctAnswer: 1, explanation: 'Boosting corrects errors sequentially, reducing both bias and variance.' },
  //       { id: 'q10', question: 'What is SHAP used for?', options: ['Regularization', 'Hyperparameter tuning', 'Feature importance and interpretability', 'Loss function'], correctAnswer: 2, explanation: 'SHAP values explain feature importance and model predictions.' },
  //       { id: 'q11', question: 'Which hyperparameter prevents overly deep trees?', options: ['reg_lambda', 'learning_rate', 'max_depth', 'subsample'], correctAnswer: 2, explanation: 'max_depth limits tree depth, preventing overfitting.' },
  //       { id: 'q12', question: 'Early stopping prevents:', options: ['Underfitting', 'Overfitting', 'Class imbalance', 'Feature leakage'], correctAnswer: 1, explanation: 'Early stopping halts training when validation performance stops improving, preventing overfitting.' },
  //       { id: 'q13', question: 'Which Gradient Boosting variant is fastest on large datasets?', options: ['XGBoost CPU', 'XGBoost GPU', 'CatBoost CPU', 'LightGBM'], correctAnswer: 3, explanation: 'LightGBM is optimized for speed and memory efficiency on large datasets.' },
  //       { id: 'q14', question: 'In class-imbalanced data, scale_pos_weight is used to:', options: ['Increase minority class weight', 'Decrease majority class weight', 'Normalize features', 'Reduce learning rate'], correctAnswer: 0, explanation: 'scale_pos_weight increases the weight of the minority class to address imbalance.' },
  //       { id: 'q15', question: 'Number of boosting rounds is controlled by:', options: ['max_depth', 'n_estimators', 'learning_rate', 'gamma'], correctAnswer: 1, explanation: 'n_estimators sets the number of boosting rounds (trees).' },
  //       { id: 'q16', question: 'What does gain-based importance measure?', options: ['Loss reduction attributed to a feature', 'Number of times feature appears', 'Feature correlation', 'Random permutation impact'], correctAnswer: 0, explanation: 'Gain-based importance measures the total loss reduction contributed by splits on a feature.' },
  //       { id: 'q17', question: 'Hybrid models combining GBM and DL use GBM to:', options: ['Extract embeddings', 'Predict final output', 'Handle images', 'Train neural network'], correctAnswer: 1, explanation: 'GBM is often used to predict the final output in hybrid tabular models.' },
  //       { id: 'q18', question: 'F1-score is:', options: ['Mean of precision and recall', 'Harmonic mean of precision and recall', 'Maximum of precision and recall', 'Minimum of precision and recall'], correctAnswer: 1, explanation: 'F1-score is the harmonic mean of precision and recall.' },
  //       { id: 'q19', question: 'ROC curve plots:', options: ['Precision vs Recall', 'FPR vs TPR', 'Loss vs Trees', 'Accuracy vs Threshold'], correctAnswer: 1, explanation: 'ROC curve plots the True Positive Rate (TPR) against the False Positive Rate (FPR).' },
  //       { id: 'q20', question: 'Why is Gradient Boosting suitable for tabular data?', options: ['Handles unstructured data', 'Learns complex feature interactions automatically', 'Requires heavy feature engineering', 'Only binary targets'], correctAnswer: 1, explanation: 'Gradient Boosting automatically learns complex feature interactions in tabular data.' }
  //     ]
  //   },
  //   {
  //     id: 'naive-bayes',
  //     title: 'Naïve Bayes (Gaussian, Bernoulli, Multinomial, Complement) in Machine Learning',
  //     description: 'Naïve Bayes is a probabilistic classifier based on Bayes’ theorem. It assumes independence among features, making it computationally efficient and effective for high-dimensional datasets like text classification and spam detection.',
  //     duration: '30 min',
  //     icon: SquareDashed,
  //     content: [
  //       {
  //         content: (
  //           <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
  //             <div>
  //               <ContentComponent
  //                 title="What is Naïve Bayes?"
  //                 description="Naïve Bayes is a family of probabilistic classifiers that apply Bayes’ theorem with a strong independence assumption among features. Despite this 'naïve' simplification, it performs remarkably well on many real-world tasks, particularly text-related problems like spam detection, sentiment analysis, and document categorization. Its efficiency, simplicity, and scalability make it a common baseline in machine learning pipelines."
  //                 list={
  //                   <ul>
  //                     <li>Probabilistic: predicts class probabilities using Bayes’ theorem.</li>
  //                     <li>Naïve assumption: features are conditionally independent given the class.</li>
  //                     <li>Computationally efficient: scales linearly with the number of features.</li>
  //                     <li>Practical effectiveness: works well in spam detection, sentiment analysis, and document classification.</li>
  //                   </ul>
  //                 }
  //               />
  //             </div>
  //             <img src="./assets/naive_bayes_intro.png" alt="Naïve Bayes Concept" style={{ width: "600px", height: "400px" }} />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div>
  //             <ContentComponent
  //               title="Independence Assumption"
  //               description="The key to Naïve Bayes’ efficiency is the independence assumption. It states that each feature contributes independently to the prediction, allowing the overall likelihood to be computed as the product of individual probabilities. While real-world features often have correlations, this simplification often yields strong performance."
  //               list={
  //                 <ul>
  //                   <li>
  //                     Probability of class given features:
  //                     <MathJaxContext>
  //                       <MathJax>{"\\(P(C\\mid x_1, x_2, ..., x_n) \\propto P(C) \\prod_{i=1}^{n} P(x_i \\mid C)\\)"}</MathJax>
  //                     </MathJaxContext>
  //                   </li>
  //                   <li>Handles high-dimensional data efficiently because the number of parameters grows linearly with features.</li>
  //                   <li>Even when features are correlated, Naïve Bayes often remains accurate, especially for text classification.</li>
  //                   <li>Example: in spam detection, words in an email are treated as independent, yet the algorithm works effectively.</li>
  //                 </ul>
  //               }
  //             />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div>
  //             <ContentComponent
  //               title="Types of Naïve Bayes"
  //               list={
  //                 <ul>
  //                   <li>
  //                     Gaussian NB: assumes continuous features are normally distributed.
  //                     <MathJaxContext>
  //                       <MathJax>{"\\(P(x_i \\mid C) = \\frac{1}{\\sqrt{2 \\pi \\sigma_C^2}} \\exp\\left(-\\frac{(x_i - \\mu_C)^2}{2 \\sigma_C^2}\\right)\\)"}</MathJax>
  //                     </MathJaxContext>
  //                   </li>
  //                   <li>
  //                     Multinomial NB: models discrete counts (e.g., word counts in text).
  //                     <MathJaxContext>
  //                       <MathJax>{"\\(P(x_i \\mid C) = \\frac{N_{i,C} + \\alpha}{N_C + \\alpha n}\\)"}</MathJax>
  //                     </MathJaxContext>
  //                   </li>
  //                   <li>Bernoulli NB: binary features (presence/absence of a word).</li>
  //                   <li>Complement NB: addresses imbalanced datasets by using statistics from complement classes.</li>
  //                 </ul>
  //               }
  //             />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div>
  //             <ContentComponent
  //               title="Applications"
  //               description="Naïve Bayes excels in domains where high-dimensional, sparse features are common:"
  //               list={
  //                 <ul>
  //                   <li>Spam filtering: classify emails as 'spam' or 'not spam'.</li>
  //                   <li>Sentiment analysis: determine positive, negative, or neutral sentiment from text.</li>
  //                   <li>Document classification: categorize news articles, blogs, or reviews.</li>
  //                   <li>Recommendation systems: probabilistic models for item preferences.</li>
  //                 </ul>
  //               }
  //             />
  //           </div>
  //         )
  //       },
  //       {
  //         content: (
  //           <div>
  //             <ContentComponent
  //               title="Advantages & Limitations"
  //               list={
  //                 <ul>
  //                   <li>Advantages:
  //                     <ul>
  //                       <li>Fast and efficient for high-dimensional data.</li>
  //                       <li>Easy to implement and interpret.</li>
  //                       <li>Performs well even with small training datasets.</li>
  //                     </ul>
  //                   </li>
  //                   <li>Limitations:
  //                     <ul>
  //                       <li>Independence assumption is often unrealistic.</li>
  //                       <li>Cannot capture feature interactions well.</li>
  //                       <li>Probability estimates may be biased when features are highly correlated.</li>
  //                     </ul>
  //                   </li>
  //                 </ul>
  //               }
  //             />
  //           </div>
  //         )
  //       }
  //     ],
  //     questions: [
  //       {
  //         id: 'q1',
  //         question: 'What is the main assumption of Naïve Bayes?',
  //         options: [
  //           'Features are highly correlated',
  //           'Features are independent given the class',
  //           'Only numeric features are allowed',
  //           'No assumptions are made'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'Naïve Bayes assumes that features contribute independently to the class probability.'
  //       },
  //       {
  //         id: 'q2',
  //         question: 'Which formula represents Naïve Bayes conditional probability?',
  //         options: [
  //           'P(C|x1,...,xn) ∝ P(C) ∏ P(xi|C)',
  //           'P(C|x1,...,xn) = P(C) + Σ P(xi|C)',
  //           'P(C|x1,...,xn) = Σ xi / n',
  //           'P(C|x1,...,xn) = max(P(xi))'
  //         ],
  //         correctAnswer: 0,
  //         explanation: 'The probability of a class given features is proportional to the prior times the product of conditional probabilities.'
  //       },
  //       {
  //         id: 'q3',
  //         question: 'Which Naïve Bayes variant is used for continuous features?',
  //         options: ['Bernoulli NB', 'Multinomial NB', 'Gaussian NB', 'Complement NB'],
  //         correctAnswer: 2,
  //         explanation: 'Gaussian Naïve Bayes assumes continuous features follow a normal distribution.'
  //       },
  //       {
  //         id: 'q4',
  //         question: 'Multinomial Naïve Bayes is best suited for:',
  //         options: ['Binary features', 'Word counts or frequency data', 'Continuous features', 'Image data'],
  //         correctAnswer: 1,
  //         explanation: 'Multinomial NB is designed for discrete count data, commonly used in text classification.'
  //       },
  //       {
  //         id: 'q5',
  //         question: 'Which Naïve Bayes variant handles imbalanced datasets better?',
  //         options: ['Gaussian NB', 'Complement NB', 'Bernoulli NB', 'Multinomial NB'],
  //         correctAnswer: 1,
  //         explanation: 'Complement NB uses statistics from complement classes to better handle imbalanced datasets.'
  //       },
  //       {
  //         id: 'q6',
  //         question: 'What is one advantage of Naïve Bayes?',
  //         options: [
  //           'Captures complex feature interactions',
  //           'Computationally efficient for high-dimensional data',
  //           'Does not require probability estimates',
  //           'Always provides perfect accuracy'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'Naïve Bayes is fast and scales well with high-dimensional features.'
  //       },
  //       {
  //         id: 'q7',
  //         question: 'Which of the following is a limitation of Naïve Bayes?',
  //         options: [
  //           'Cannot handle small datasets',
  //           'Cannot capture feature dependencies',
  //           'Too computationally expensive',
  //           'Requires deep neural networks'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'Naïve Bayes cannot capture feature interactions because of its independence assumption.'
  //       },
  //       {
  //         id: 'q8',
  //         question: 'In spam filtering, how does Naïve Bayes treat words in an email?',
  //         options: [
  //           'As dependent on their co-occurrence',
  //           'As independent features',
  //           'As continuous values',
  //           'As images'
  //         ],
  //         correctAnswer: 1,
  //         explanation: 'Naïve Bayes assumes words are independent when calculating class probabilities.'
  //       },
  //       {
  //         id: 'q9',
  //         question: 'Which formula is used in Gaussian Naïve Bayes for P(x|C)?',
  //         options: [
  //           'P(x|C) = 1 / (σ√(2π)) * exp(-(x-μ)² / (2σ²))',
  //           'P(x|C) = count(x,C) / total_count',
  //           'P(x|C) = max(x)',
  //           'P(x|C) = x / sum(x)'
  //         ],
  //         correctAnswer: 0,
  //         explanation: 'Gaussian NB uses the normal distribution formula for continuous features.'
  //       },
  //       {
  //         id: 'q10',
  //         question: 'Why does Naïve Bayes perform well despite the independence assumption rarely holding?',
  //         options: [
  //           'Because the algorithm ignores probabilities',
  //           'Because it uses deep learning',
  //           'Because multiplying probabilities often still produces accurate class predictions',
  //           'Because it only works with binary features'
  //         ],
  //         correctAnswer: 2,
  //         explanation: 'Even if features are not truly independent, the probabilistic model often correctly identifies the most likely class.'
  //       }
  //     ]

  //   }












];