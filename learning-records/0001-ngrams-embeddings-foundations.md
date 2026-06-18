# N-grams, embeddings, and probability basics established

Completed Lesson 1 and demonstrated active engagement through follow-up questions on three foundational concepts.

**Probability distributions**: User needed the concept made concrete. Explained as a list of all possible outcomes summing to 1.0, with the temperature/sampling connection to LLM APIs. That context landed well given Zeke's existing exposure to model APIs.

**Normalization**: Needed explicit grounding — it's just dividing counts by totals to get numbers that sum to 1. The vote-count-to-percentage analogy was used.

**How embeddings are learned**: The key clarification was that embeddings are not designed — they *emerge* from training a prediction task. The backprop loop (predict → measure error → adjust weights → repeat) was explained without math. Word2Vec's simplified objective was noted as context.

**Implications for Lesson 2**: Zeke understands that word embeddings capture meaning via co-occurrence, and that early neural LMs still had a fixed context window. He's ready for the RNN story: what recurrence tried to solve (arbitrary-length sequences), and why it still failed for long-range dependencies.
