class CreateExpenseReceiptWorker
  include Sidekiq::Worker

  def perform(amazon_statement_id, current_account_id, receipt_id)
    amazon_statement = AmazonStatement.find(amazon_statement_id)
    current_account = Account.find(current_account_id)

    expense_receipt = AmazonSummary.new(eval(amazon_statement.summary)).create_expense_receipt(amazon_statement.period, current_account_id)

    CreateExpenseReceiptInQBOWorker.perform_async(amazon_statement_id, current_account_id, expense_receipt.id, receipt_id)  
  end
end