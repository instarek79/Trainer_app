import { TopicContent, Topic, QuizQuestion } from "../components/Content"
import ContentComponent from "../components/ContentComponent"
import CodeViewer from "../components/CodeViewer"
import React from "react"
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { ChartSpline } from "lucide-react"
export const LogisticRegression: Topic = {
    id: 'logistic-regression',
    title: 'Logistic Regression in Machine Learning',
    description: 'Understanding classification, sigmoid function, and diabetes prediction',
    duration: '15 min',
    icon: ChartSpline,
    content: [
        {
            content: (
                <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
                    <div style={{ flex: 1 }}>
                        <ContentComponent
                            title="What is Logistic Regression?"
                            description="Logistic Regression is a supervised machine learning algorithm mainly used for classification. Despite the name, it does not perform regression like predicting continuous values. Instead, it predicts categories — most often binary outcomes such as 0/1, yes/no, or diabetic/non-diabetic. The model works by estimating the probability that an input belongs to a certain class, and then classifies it using a threshold (commonly 0.5)."
                        />
                    </div>
                    <img
                        src="./assets/log-reg-idea.jpg"
                        alt="Logistic Regression Overview"
                        style={{ width: "480px", height: "300px", borderRadius: "12px" }}
                    />
                </div>
            )
        },
        {
            content: (
                <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
                    <div style={{ flex: 1 }}>
                        <ContentComponent
                            title="Why Not Linear Regression for Classification?"
                            description="Linear Regression outputs continuous numbers, which can fall outside the probability range of 0–1. That makes it unreliable for classification tasks. Logistic Regression fixes this by using the sigmoid (logistic) function to squash values into [0,1], so the outputs can be directly interpreted as probabilities. This ensures stable decision boundaries and makes it suitable for binary classification tasks."
                        />
                    </div>
                    <img
                        src="./assets/log-reg.png"
                        alt="Linear vs Logistic Regression"
                        style={{ width: "480px", height: "300px", borderRadius: "12px" }}
                    />
                </div>
            )
        },
        {
            content: (
                <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
                    <div style={{ flex: 1 }}>
                        <ContentComponent
                            title="Key Use Cases of Logistic Regression"
                            list={
                                <ul style={{ marginLeft: '20px' }}>
                                    <li> <b>Diabetes prediction:</b> estimating risk based on features like glucose, BMI, and age.</li>
                                    <li><b>Medical diagnosis:</b> classifying whether a patient has a disease.</li>
                                    <li><b>Spam detection:</b> filtering emails into spam or not spam.</li>
                                    <li><b>Credit scoring:</b> predicting whether a loan applicant might default.</li>
                                </ul>
                            }
                        />
                    </div>
                    <img
                        src="./assets/customer-chun.png"
                        alt="Use Cases of Logistic Regression"
                        style={{ width: "480px", height: "300px", borderRadius: "12px" }}
                    />
                </div>
            )
        },
        {
            content: (
                <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
                    <div style={{ flex: 1 }}>
                        <ContentComponent
                            title="The Logistic (Sigmoid) Function"
                            list={
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <MathJaxContext>
                                        <MathJax>{"\\(\\sigma(z) = \\frac{1}{1 + e^{-z}}\\)"}</MathJax>
                                    </MathJaxContext>
                                    <p>At the heart of Logistic Regression is the sigmoid function. It transforms any real number into a value between 0 and 1, which we interpret as probability. A threshold (like 0.5) decides the final class: above it is positive (1), below it is negative (0).</p>
                                </div>
                            }
                        // description=
                        />
                    </div>
                    <img
                        src="./assets/log-reg.png"
                        alt="Sigmoid Function Curve"
                        style={{ width: "400px", height: "250px", borderRadius: "12px" }}
                    />
                </div>
            )
        },
        {
            content: (
                <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "start", }}>
                        <ContentComponent
                            title="Mathematical Representation of Logistic Regression"
                            list={
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <MathJaxContext>
                                        <MathJax>{"\\( h_\\theta(x) = \\sigma(\\theta^T x) = \\frac{1}{1 + e^{-\\theta^T x}} \\)"}</MathJax>
                                    </MathJaxContext>
                                    <p>
                                        Here, <b>θ</b> represents the parameters (weights), and <b>x</b> represents the input features.
                                        The output is always between 0 and 1, making it suitable to interpret as probability.
                                    </p>

                                </div>
                            }
                        />

                        <ContentComponent
                            title="Cost Function: Log Loss"
                            list={
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <MathJaxContext>
                                        <MathJax>{"\\( J(\\theta) = - \\frac{1}{m} \\sum_{i=1}^m [ y^{(i)} \\log(h_\\theta(x^{(i)})) + (1-y^{(i)}) \\log(1-h_\\theta(x^{(i)})) ] \\)"}</MathJax>
                                    </MathJaxContext>
                                    <p>
                                        Instead of Mean Squared Error (used in Linear Regression), Logistic Regression uses
                                        <b> Log Loss (Cross-Entropy Loss)</b>. It penalizes wrong predictions more heavily,
                                        making it suitable for classification problems.
                                    </p>
                                </div>
                            }
                        />


                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "start", }}>

                        <ContentComponent
                            title="Decision Boundary"
                            // description=" 
                            list={
                                <div>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                                        <MathJaxContext>
                                            <MathJax>{"\\( \\theta^T x = 0 \\) is the decision boundary"}</MathJax>
                                        </MathJaxContext>
                                    </div>
                                    <p>
                                        A decision boundary separates the two classes. For logistic regression, this boundary is linear, defined where probability = 0.5. That means the model predicts class 1 if probability ≥ 0.5, otherwise class 0.
                                    </p>
                                </div>

                            }
                        />

                        <ContentComponent
                            title="Optimization using Gradient Descent"
                            list={
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <MathJaxContext>
                                        <MathJax>{"\\( \\theta_j := \\theta_j - \\alpha \\frac{\\partial J(\\theta)}{\\partial \\theta_j} \\)"}</MathJax>
                                    </MathJaxContext>
                                    <p>
                                        The goal is to find the best parameters (θ) that minimize the cost function.
                                        Gradient Descent iteratively updates the weights in the opposite direction of the gradient
                                        until convergence.
                                    </p>
                                </div>
                            }
                        />

                    </div>

                </div>
            )
        },
        {
            content: (
                <div style={{ display: "flex", flexDirection: "column", gap: "30px", alignItems: "center" }}>
                    <ContentComponent
                        title="Step 1: Import Required Libraries"
                        list={
                            <div>
                                <p>
                                    We start by importing essential Python libraries. NumPy and pandas help with data handling,
                                    matplotlib and seaborn for visualization, and scikit-learn for machine learning functions.
                                </p>
                                <CodeViewer code={`import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report`} />
                            </div>
                        }
                    />
                    <ContentComponent
                        title="Step 2: Load and Explore the Dataset"
                        list={
                            <div>
                                <p>
                                    We use a diabetes dataset (for example, from Kaggle).
                                    The first step is to load the data and check its structure, missing values, and summary statistics.
                                </p>
                                <CodeViewer code={`# Load the dataset
data = pd.read_csv("diabetes.csv")
print(data.head())
print(data.info())`} />
                            </div>
                        }
                    />
                    <ContentComponent
                        title="Step 3: Split Dataset into Training and Testing"
                        list={
                            <div>
                                <p>
                                    We split the dataset into training (80%) and testing (20%).
                                    Training data is used to fit the model, while testing data evaluates its performance.
                                </p>
                                <CodeViewer code={`X = data.drop("Outcome", axis=1)  # Features
y = data["Outcome"]               # Target

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)`} />
                            </div>
                        }
                    />
                    <ContentComponent
                        title="Step 4: Train Logistic Regression Model"
                        list={
                            <div>
                                <p>
                                    Now we fit the Logistic Regression model using the training dataset. We set max_iter=1000 to ensure convergence.
                                </p>
                                <CodeViewer code={`model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)          # Train the model`} />
                            </div>
                        }
                    />
                    <ContentComponent
                        title="Step 5: Make Predictions & Evaluate"
                        list={
                            <div>
                                <p>
                                    Finally, we test the model on the unseen data and check accuracy, confusion matrix,
                                    and classification report.
                                </p>
                                <CodeViewer code={`y_pred = model.predict(X_test)

print("Accuracy:", accuracy_score(y_test, y_pred))
print("Confusion Matrix:\\n", confusion_matrix(y_test, y_pred))
print("Classification Report:\\n", classification_report(y_test, y_pred))`} />
                            </div>
                        }
                    />
                </div>
            )
        },
        {
            content: (
                <div style={{ display: "flex", flexDirection: "column", gap: "30px", alignItems: "center", textAlign: "justify" }}>

                    <ContentComponent
                        title="How Logistic Regression Solves Diabetes Prediction"
                        list={
                            <div>
                                <p>
                                    Logistic Regression is widely used in healthcare for predicting diseases like diabetes.
                                    It works by estimating the probability of a patient having diabetes based on medical features
                                    such as glucose level, BMI, blood pressure, age, and insulin levels.
                                    If the probability is greater than 0.5, the model predicts “diabetic,”
                                    otherwise “non-diabetic.”
                                </p>
                                <p>
                                    One advantage of Logistic Regression is its interpretability:
                                    doctors can understand which features contribute most to the prediction.
                                    For example, higher glucose levels and BMI strongly increase diabetes risk.
                                    This makes the model not just a black box, but a tool to support medical decision-making.
                                </p>
                            </div>
                        }
                    />



                    <ContentComponent
                        title="Python Implementation for Diabetes Prediction"
                        list={
                            <div>
                                <p>
                                    Below is an example using scikit-learn where we train Logistic Regression
                                    on a diabetes dataset and make predictions.
                                </p>
                                <CodeViewer code={`from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix

# Features and target
X = data.drop("Outcome", axis=1)
y = data["Outcome"]

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

# Train Logistic Regression
model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)

# Predictions
y_pred = model.predict(X_test)

print("Accuracy:", accuracy_score(y_test, y_pred))
print("Confusion Matrix:\\n", confusion_matrix(y_test, y_pred))`} />
                            </div>
                        }
                    />
                    <ContentComponent
                        title="Medical Relevance and Limitations"
                        list={
                            <div >
                                <p>
                                    <b>Medical Use:</b> Logistic Regression helps in early detection of diabetes,
                                    assisting doctors in identifying at-risk patients and planning lifestyle interventions.
                                    Since it outputs probabilities, it allows doctors to measure risk rather than just giving
                                    a binary yes/no result.
                                </p>
                                <p>
                                    <b>Limitations:</b>
                                    <ul style={{ marginLeft: '20px' }}>
                                        <li> <b>Linear Assumption:</b> Assumes a linear relationship between features and log-odds, which may oversimplify reality.</li>
                                        <li><b>Correlation Issues:</b> Performance can drop when features are highly correlated or when the data is imbalanced.</li>
                                        <li><b>Complexity vs Interpretability:</b> More complex models (like Random Forests or Neural Networks) may outperform Logistic Regression,
                                            but at the cost of interpretability.</li>
                                    </ul>
                                </p>
                            </div>
                        }
                    />
                </div>
            )
        },

        {
            content: (
                <div style={{ display: "flex", flexDirection: "column", gap: "30px", alignItems: "center" }}>

                    {/* --- CONFUSION MATRIX ---
                    <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
                        <div style={{ flex: 1 }}>
                            <ContentComponent
                                title="Confusion Matrix (TP, FP, TN, FN)"
                                list={
                                    <div>
                                        <p>
                                            The <b>confusion matrix</b> summarizes predictions compared to actual outcomes:
                                        </p>
                                        <p>
                                            • <b>True Positive (TP):</b> Diabetic correctly classified as diabetic.
                                            • <b>False Positive (FP):</b> Non-diabetic incorrectly classified as diabetic.
                                            • <b>True Negative (TN):</b> Non-diabetic correctly classified as non-diabetic.
                                            • <b>False Negative (FN):</b> Diabetic incorrectly classified as non-diabetic.
                                        </p>
                                        <p>
                                            In medicine, <b>false negatives are more dangerous</b> because missed diagnoses delay treatment.
                                            By analyzing this breakdown, doctors can assess if the model is conservative enough for safe screening.
                                        </p>
                                        <CodeViewer code={`from sklearn.metrics import confusion_matrix

y_pred = log_reg.predict(X_test)
cm = confusion_matrix(y_test, y_pred)
print(cm)

# Example output:
# [[85 15]   -> TN=85, FP=15
#  [12 49]]  -> FN=12, TP=49`} />
                                    </div>
                                }
                            />
                        </div>
                        <img
                            src="./assets/Confusion_Matrix.png"
                            alt="Confusion Matrix in Diabetes Prediction"
                            style={{ width: "480px", height: "320px", borderRadius: "12px" }}
                        />
                    </div> */}

                    {/* --- GENERAL METRICS --- */}
                    <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
                        <div style={{ flex: 1 }}>

                            <ContentComponent
                                title="Evaluating Logistic Regression in Diabetes Prediction"
                                list={
                                    <div>
                                        <p>
                                            Evaluating a medical prediction model goes beyond accuracy.
                                            In diabetes detection, <b>recall</b>, <b>ROC-AUC</b>, and <b>calibration</b> are crucial.
                                            These ensure we minimize missed diagnoses while providing reliable probability estimates.
                                        </p>
                                        <p>
                                            Common evaluation metrics:
                                            <ul style={{ marginLeft: '20px' }}>
                                                <li>• <b>Accuracy</b> → Overall correctness.</li>
                                                <li>• <b>Precision</b> → Out of predicted diabetics, how many were correct?</li>
                                                <li>• <b>Recall (Sensitivity)</b> → Out of actual diabetics, how many were detected?</li>
                                                <li>• <b>F1-score</b> → Balance between precision and recall.</li>
                                                <li>• <b>ROC-AUC</b> → Ability to discriminate between classes at all thresholds.</li>
                                            </ul>
                                            <ul style={{ marginLeft: '20px' }}>
                                                <li>• <b>Calibration</b> → Whether predicted probabilities reflect real-world risks.</li>
                                            </ul>
                                        </p>
                                        <div>
                                            <p>
                                                The <b>confusion matrix</b> summarizes predictions compared to actual outcomes:
                                            </p>
                                            <p>
                                                <ul style={{ marginLeft: '20px' }}>
                                                    <li>  • <b>True Positive (TP):</b> Diabetic correctly classified as diabetic.</li>
                                                    <li>  • <b>False Positive (FP):</b> Non-diabetic incorrectly classified as diabetic.</li>
                                                    <li>  • <b>True Negative (TN):</b> Non-diabetic correctly classified as non-diabetic.</li>
                                                    <li>  • <b>False Negative (FN):</b> Diabetic incorrectly classified as non-diabetic.</li>
                                                </ul>
                                            </p>

                                            <CodeViewer code={`from sklearn.metrics import confusion_matrix

y_pred = log_reg.predict(X_test)
cm = confusion_matrix(y_test, y_pred)
print(cm)

# Example output:
# [[85 15]   -> TN=85, FP=15
#  [12 49]]  -> FN=12, TP=49`} />
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                        <img
                            src="./assets/Confusion_Matrix.png"
                            alt="Evaluation Metrics Overview"
                            style={{ width: "480px", height: "320px", borderRadius: "12px" }}
                        />
                    </div>

                    {/* --- ROC & AUC --- */}
                    <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
                        <div style={{ flex: 1 }}>
                            <ContentComponent
                                title="ROC Curve & AUC"
                                list={
                                    <div>
                                        <p>
                                            The <b>Receiver Operating Characteristic (ROC) curve</b> plots the
                                            <b> True Positive Rate (Recall)</b> against the <b>False Positive Rate</b> at different thresholds.
                                            <ul>

                                                <li>• X-axis → False Positive Rate (1 - Specificity)  </li>
                                                <li>• Y-axis → True Positive Rate (Sensitivity)  </li>
                                            </ul>
                                        </p>
                                        <p>
                                            The <b>Area Under the Curve (AUC)</b> summarizes this performance:
                                            <ul>
                                                <li>• AUC = 1 → Perfect model.  </li>
                                                <li>• AUC = 0.5 → Random guessing.  </li>
                                                <li>• AUC ≈ 0.8 → Good discrimination.  </li>
                                            </ul>
                                        </p>
                                        <p>
                                            For the Pima Indians Diabetes dataset, Logistic Regression achieves an AUC ≈ <b>0.81</b>,
                                            showing strong ability to distinguish diabetic from non-diabetic patients.
                                        </p>
                                    </div>
                                }
                            />
                        </div>
                        <img
                            src="./assets/log-ROC.png"
                            alt="ROC Curve for Logistic Regression"
                            style={{ width: "480px", height: "320px", borderRadius: "12px" }}
                        />
                    </div>

                    {/* --- CALIBRATION --- */}
                    <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
                        <div style={{ flex: 1 }}>
                            <ContentComponent
                                title="Calibration Curves (Probability Interpretation)"
                                list={
                                    <div>
                                        <p>
                                            A well-calibrated model provides probabilities that match real-world likelihoods.
                                            Example: among patients predicted with 70% risk, ~70% should truly be diabetic.
                                        </p>
                                        <p>
                                            In calibration curves:
                                            <ul>
                                                <li>• X-axis → Mean predicted probability.  </li>
                                                <li>• Y-axis → Actual fraction of positives.  </li>
                                                <li>• Dotted diagonal → Perfect calibration.  </li>
                                            </ul>
                                        </p>
                                        <p>
                                            In practice:
                                            <ul>
                                                <li>• Curve above diagonal → Model overestimates risk.  </li>
                                                <li>• Curve below diagonal → Model underestimates risk.  </li>
                                            </ul>
                                            Proper calibration is vital in healthcare for treatment planning and patient communication.
                                        </p>
                                    </div>
                                }
                            />
                        </div>
                        <img
                            src="./assets/log-calibration.png"
                            alt="Calibration Curve in Diabetes Prediction"
                            style={{ width: "480px", height: "320px", borderRadius: "12px" }}
                        />
                    </div>


                    {/* --- ERROR ANALYSIS --- */}
                    <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
                        <div style={{ flex: 1 }}>
                            <ContentComponent
                                title="The results for the above algorithm and dataset are"
                                list={
                                    <div>
                                        <p>
                                            The diagonal elements (81 and 27) represent the correct classifications. The model correctly identified 81 non-diabetic cases and 27 diabetic cases. The off-diagonal elements (19 and 27) represent misclassifications. The model mistakenly classified 19 non-diabetic cases as diabetic and 27 diabetic cases as non-diabetic.
                                        </p>

                                    </div>
                                }
                            />
                        </div>
                        <img
                            src="./assets/log-diabetes-confusion-matrix.png"
                            alt="Error Analysis in Diabetes Prediction"
                            style={{ width: "480px", height: "320px", borderRadius: "12px" }}
                        />
                    </div>

                    {/* --- ERROR ANALYSIS --- */}
                    <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
                        <div style={{ flex: 1 }}>
                            <ContentComponent
                                title="Error Analysis with Examples"
                                list={
                                    <div>
                                        <p>
                                            Examining <b>false negatives</b> (missed diabetics) and <b>false positives</b>
                                            (non-diabetics flagged) helps refine the model.
                                        </p>
                                        <p>
                                            • <b>False Negatives:</b> Often occur when glucose/BMI are borderline.
                                            Patients may be missed despite moderate risk.
                                        </p>
                                        <p>
                                            • <b>False Positives:</b> Model may over-rely on glucose or insulin,
                                            predicting diabetes too aggressively.
                                        </p>
                                    </div>
                                }
                            />
                        </div>
                        <img
                            src="./assets/log-diabetes-confusion-matrix.png"
                            alt="Error Analysis in Diabetes Prediction"
                            style={{ width: "480px", height: "320px", borderRadius: "12px" }}
                        />
                    </div>

                </div>
            )
        },
        {
            content: (
                <div style={{ display: "flex", flexDirection: "column", gap: "40px", alignItems: "center" }}>

                    {/* --- REGULARIZATION --- */}
                    <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
                        <div style={{ flex: 1 }}>
                            <ContentComponent
                                title="Regularization (L1, L2) & Overfitting Control"
                                list={
                                    <div>
                                        <p>
                                            Logistic Regression can overfit — especially with many features or noisy data.
                                            <b>Regularization</b> adds a penalty to prevent overly complex models:
                                        </p>
                                        <ul style={{ marginLeft: "20px" }}>
                                            <li><b>L1 (Lasso):</b> Shrinks some coefficients to zero → acts as feature selection.</li>
                                            <li><b>L2 (Ridge):</b> Smoothly shrinks coefficients toward zero → reduces variance without dropping features.</li>
                                        </ul>
                                        <CodeViewer code={`from sklearn.linear_model import LogisticRegression

log_reg_l1 = LogisticRegression(penalty="l1", solver="liblinear", max_iter=1000)
log_reg_l2 = LogisticRegression(penalty="l2", solver="lbfgs", max_iter=1000)`} />
                                    </div>
                                }
                            />
                        </div>
                        <img
                            src="./assets/regulariztion.png"
                            alt="Regularization in Logistic Regression"
                            style={{ width: "460px", height: "300px", borderRadius: "12px" }}
                        />
                    </div>

                    {/* --- MULTICOLLINEARITY --- */}
                    <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
                        <div style={{ flex: 1 }}>
                            <ContentComponent
                                title="Multicollinearity Issues in Diabetes Data"
                                list={
                                    <div>
                                        <p>
                                            Highly correlated features (e.g., BMI & SkinThickness) destabilize coefficients.
                                            This is called <b>multicollinearity</b> and leads to misleading interpretations.
                                        </p>
                                        <p>
                                            Example from the Pima Indians dataset:
                                            <ul style={{ marginLeft: "20px" }}>
                                                <li>• BMI (VIF = 11.35), SkinThickness (9.81), Insulin (7.83).</li>
                                            </ul>
                                            <b>→ Severe multicollinearity inflates coefficients and confuses risk attribution.</b>
                                        </p>
                                        <p>
                                            <b>Solutions:</b>
                                            <ul style={{ marginLeft: "20px" }}>
                                                <li>• Remove redundant features.</li>
                                                <li>• Apply dimensionality reduction (PCA).</li>
                                                <li>• Use L1 regularization for feature selection.</li>
                                            </ul>
                                        </p>
                                        <CodeViewer code={`from statsmodels.stats.outliers_influence import variance_inflation_factor
import pandas as pd

vif = pd.DataFrame()
vif["Feature"] = X.columns
vif["VIF"] = [variance_inflation_factor(X.values, i) for i in range(X.shape[1])]
print(vif)`} />
                                    </div>
                                }
                            />
                        </div>
                        <img
                            src="./assets/Multicollinearity.jpg"
                            alt="Multicollinearity in Logistic Regression"
                            style={{ width: "460px", height: "300px", borderRadius: "12px" }}
                        />
                    </div>

                    {/* --- FEATURE SCALING --- */}
                    <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
                        <div style={{ flex: 1 }}>
                            <ContentComponent
                                title="Feature Scaling & Normalization"
                                description="While Logistic Regression does not require scaling for correctness, scaling improves optimization and helps when regularization is applied. Standardization (mean=0, std=1) or normalization (0–1 range) ensures features like Glucose and Pregnancies contribute proportionally."
                                list={
                                    <CodeViewer code={`from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)`} />
                                }
                            />
                        </div>
                        <img
                            src="./assets/Feature Scaling & Normalization.png"
                            alt="Feature Scaling in Logistic Regression"
                            style={{ width: "460px", height: "300px", borderRadius: "12px" }}
                        />
                    </div>

                    {/* --- MULTICLASS --- */}
                    <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
                        <div style={{ flex: 1 }}>
                            <ContentComponent
                                title="Multiclass Logistic Regression"
                                list={
                                    <div>
                                        <p>
                                            Logistic Regression extends beyond binary tasks:
                                        </p>
                                        <ul style={{ marginLeft: "20px" }}>
                                            <li><b>One-vs-All (OvA):</b> Train one classifier per class vs. all others.</li>
                                            <li><b>Softmax (Multinomial):</b> Predicts probabilities across all classes simultaneously.</li>
                                        </ul>
                                        <CodeViewer code={`log_reg_ova = LogisticRegression(multi_class="ovr", max_iter=1000)
log_reg_softmax = LogisticRegression(multi_class="multinomial", solver="lbfgs", max_iter=1000)`} />
                                    </div>
                                }
                            />
                        </div>
                        <img
                            src="./assets/One-vs-All.png"
                            alt="Multiclass Logistic Regression"
                            style={{ width: "460px", height: "300px", borderRadius: "12px" }}
                        />
                    </div>

                    {/* --- INTERPRETABILITY --- */}
                    {/* <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
                        <div style={{ flex: 1 }}> */}
                            <ContentComponent
                                title="Interpretability of Coefficients"
                                list={
                                    <div>
                                        <p>
                                            Logistic Regression is prized for <b>explainability</b>.
                                            Each coefficient shows how a unit increase in a feature changes the log-odds of diabetes.
                                        </p>
                                        <p>
                                            Converting to <b>odds ratios (exp(coef))</b>:
                                            <ul style={{ marginLeft: "20px" }}>
                                                <li>• Odds ratio {">"} 1 → increases risk.</li>
                                                <li>• Odds ratio {"<"} 1 → decreases risk.</li>
                                            </ul>
                                        </p>
                                        <CodeViewer code={`import numpy as np

odds_ratios = np.exp(log_reg.coef_[0])
print(pd.Series(odds_ratios, index=X.columns))`} />
                                    </div>
                                }
                            />
                        {/* </div>
                       
                    </div> */}

                    {/* --- CRITICAL THINKING --- */}
                    {/* <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
                        <div style={{ flex: 1 }}> */}
                            <ContentComponent
                                title="Critical Thinking: Strengths & Weaknesses"
                                list={
                                    <div>
                                        <p><b>When Logistic Regression works best:</b> linearly separable data, small-to-medium datasets, interpretability required.</p>
                                        <p><b>When it fails:</b> complex non-linear patterns, strong feature interactions, limited by linear decision boundary.</p>
                                        <p><b>Comparison with Deep Learning:</b>
                                        <ul style={{ marginLeft: "20px" }}>
                                            <li>• Deep learning → excels with large, complex data (e.g., images, text).</li>
                                            <li>• Logistic Regression → simpler, faster, more interpretable for structured/tabular data.</li>
                                        </ul>
                                        </p>
                                        <p><b>Assumptions:</b>
                                        <ul style={{ marginLeft: "20px" }}>
                                            <li>• Log-odds linearity.</li>
                                            <li>• Independent observations.</li>
                                            <li>• No perfect multicollinearity.</li>
                                            <li>• Large enough dataset for stable estimates.</li>
                                        </ul>
                                        </p>
                                    </div>
                                }
                            />
                        {/* </div>
                        <img
                            src="./assets/critical-thinking.jpg"
                            alt="Strengths and Weaknesses of Logistic Regression"
                            style={{ width: "460px", height: "300px", borderRadius: "12px" }}
                        />
                    </div> */}

                    {/* --- CREATIVE EXTENSIONS --- */}
                    <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
                        <div style={{ flex: 1 }}>
                            <ContentComponent
                                title="Creative Extensions of Logistic Regression"
                                list={
                                    <div>
                                        <p>
                                            Logistic Regression can be extended creatively:
                                        </p>
                                        <ul style={{ marginLeft: "20px" }}>
                                            <li><b>Polynomial Features:</b> Capture non-linear effects (e.g., Glucose × BMI).</li>
                                            <li><b>Feature Engineering:</b> Ratios, bins, log transforms for clinical meaning.</li>
                                            <li><b>Deploy as Web App:</b> Streamlit/Flask for medical decision support tools.</li>
                                            <li><b>Stacking:</b> Use Logistic Regression as a meta-learner in ensembles.</li>
                                        </ul>
                                        <CodeViewer code={`from sklearn.ensemble import StackingClassifier, RandomForestClassifier, GradientBoostingClassifier

base = [
    ("rf", RandomForestClassifier(n_estimators=300, random_state=42)),
    ("gb", GradientBoostingClassifier(random_state=42)),
]
meta = LogisticRegression(max_iter=2000, penalty="l2")

stack = StackingClassifier(estimators=base, final_estimator=meta, cv=5)
stack.fit(X_train, y_train)
print("AUC (stack):", roc_auc_score(y_valid, stack.predict_proba(X_valid)[:,1]))`} />
                                    </div>
                                }
                            />
                        </div>
                        <img
                            src="./assets/regulariztion.png"
                            alt="Creative Extensions with Logistic Regression"
                            style={{ width: "460px", height: "300px", borderRadius: "12px" }}
                        />
                    </div>

                </div>
            )
        },









    ],
    questions: [
        {
            id: 'q1',
            question: 'What type of problems is logistic regression mainly used for?',
            options: ['Regression problems', 'Binary classification problems', 'Unsupervised learning tasks', 'Clustering tasks'],
            correctAnswer: 1,
            explanation: 'Logistic regression is mainly used for binary classification problems.'
        },
        {
            id: 'q2',
            question: 'What does logistic regression output?',
            options: ['Exact categories', 'Probabilities between 0 and 1', 'Continuous values', 'Decision trees'],
            correctAnswer: 1,
            explanation: 'Logistic regression outputs probabilities that are then mapped to categories.'
        },
        {
            id: 'q3',
            question: 'Which mathematical function is used in logistic regression?',
            options: ['Linear function', 'Sigmoid function', 'Exponential function', 'Square root function'],
            correctAnswer: 1,
            explanation: 'The sigmoid function is used to map outputs into probabilities between 0 and 1.'
        },
        {
            id: 'q4',
            question: 'In diabetes prediction, logistic regression predicts:',
            options: ['The exact blood sugar level', 'Whether someone is diabetic or not', 'The patient’s weight', 'Future glucose readings'],
            correctAnswer: 1,
            explanation: 'It predicts the probability of being diabetic or not (binary outcome).'
        },
        {
            id: 'q5',
            question: 'What happens if the predicted probability is greater than 0.5?',
            options: ['The patient is predicted non-diabetic', 'The patient is predicted diabetic', 'The result is inconclusive', 'The model retrains'],
            correctAnswer: 1,
            explanation: 'A probability greater than 0.5 is classified as diabetic.'
        },
        {
            id: 'q6',
            question: 'What is the role of the decision boundary?',
            options: ['It removes outliers', 'It separates the two classes', 'It calculates BMI', 'It encodes patient features'],
            correctAnswer: 1,
            explanation: 'The decision boundary is the threshold that separates diabetic and non-diabetic predictions.'
        },
        {
            id: 'q7',
            question: 'Which of the following is NOT an application of logistic regression?',
            options: ['Fraud detection', 'Spam classification', 'Diabetes prediction', 'Sorting unlabeled data into clusters'],
            correctAnswer: 3,
            explanation: 'Sorting unlabeled data into clusters is an unsupervised task, not logistic regression.'
        },
        {
            id: 'q8',
            question: 'Why is logistic regression popular in healthcare?',
            options: ['It requires no data', 'It predicts continuous sugar levels', 'It is interpretable and efficient', 'It is only used for images'],
            correctAnswer: 2,
            explanation: 'Logistic regression is simple, interpretable, and effective for binary medical diagnoses.'
        },
        {
            id: 'q9',
            question: 'During training, what does logistic regression optimize?',
            options: ['The distance between data points', 'The error between predictions and actual labels', 'The clustering of features', 'The random forest splits'],
            correctAnswer: 1,
            explanation: 'It minimizes the error between predicted probabilities and actual outcomes.'
        },
        {
            id: 'q10',
            question: 'True or False: Logistic regression can only be used for predicting continuous outcomes.',
            options: ['True', 'False'],
            correctAnswer: 1,
            explanation: 'False, it is used for classification, not continuous outcomes.'
        },
        {
            id: 'q11',
            question: 'True or False: Logistic regression uses the sigmoid function to generate probabilities.',
            options: ['True', 'False'],
            correctAnswer: 0,
            explanation: 'True, the sigmoid function maps values to probabilities between 0 and 1.'
        },
        {
            id: 'q12',
            question: 'Which field often uses logistic regression for churn prediction?',
            options: ['Astronomy', 'Marketing', 'Agriculture', 'Geology'],
            correctAnswer: 1,
            explanation: 'Marketing uses logistic regression to predict customer churn.'
        },
        {
            id: 'q13',
            question: 'Which algorithm is simpler: logistic regression or neural networks?',
            options: ['Logistic regression', 'Neural networks', 'Both are the same', 'It depends on data'],
            correctAnswer: 0,
            explanation: 'Logistic regression is simpler and more interpretable than neural networks.'
        },
        {
            id: 'q14',
            question: 'In logistic regression, what threshold is commonly used to classify outcomes?',
            options: ['0.3', '0.5', '0.7', '1.0'],
            correctAnswer: 1,
            explanation: 'By default, 0.5 is used as the classification threshold.'
        },
        {
            id: 'q15',
            question: 'True or False: Logistic regression is a type of supervised learning.',
            options: ['True', 'False'],
            correctAnswer: 0,
            explanation: 'True, it requires labeled data for training.'
        },
        {
            id: 'q16',
            question: 'Which is NOT a step in logistic regression?',
            options: ['Training with labeled data', 'Using sigmoid function', 'Creating a decision boundary', 'Clustering unlabeled data'],
            correctAnswer: 3,
            explanation: 'Clustering unlabeled data is unsupervised learning, not logistic regression.'
        },
        {
            id: 'q17',
            question: 'Which is an advantage of logistic regression?',
            options: ['Difficult to interpret', 'Computationally efficient', 'Works only for images', 'Requires huge datasets'],
            correctAnswer: 1,
            explanation: 'It is efficient and easy to interpret.'
        },
        {
            id: 'q18',
            question: 'True or False: Logistic regression can classify multiple categories without modification.',
            options: ['True', 'False'],
            correctAnswer: 1,
            explanation: 'False, logistic regression by default is binary, though extensions like multinomial logistic regression exist.'
        },
        {
            id: 'q19',
            question: 'Which function best describes the shape of the logistic curve?',
            options: ['Linear', 'S-shaped (sigmoid)', 'Circular', 'Exponential growth'],
            correctAnswer: 1,
            explanation: 'The sigmoid curve is S-shaped.'
        },
        {
            id: 'q20',
            question: 'Why is logistic regression considered interpretable?',
            options: ['It requires no math', 'Coefficients show how features affect outcomes', 'It creates random trees', 'It skips feature importance'],
            correctAnswer: 1,
            explanation: 'The coefficients of logistic regression show how features influence the predicted probability.'
        }
    ]
}